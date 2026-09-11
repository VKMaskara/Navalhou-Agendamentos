import bcrypt from 'bcryptjs'
import { findUserByEmail, createUser, listUsersByBarbershop, findUserById, updateUser,deactivateUser } from '../repositories/UserRepository.js'
import AppError from '../utils/AppError.js'

export async function registerUser(data, requester) {
    const { name, email, password } = data

    // Checa duplicidade de e-mail antes de qualquer outra coisa
    const existingUser = await findUserByEmail(email)

    if (existingUser) {
        throw AppError('Email already in use', 409)
    }

    const hashedPassword = await bcrypt.hash(password, 10) 

    const user = {
        name,
        email,
        phone: data.phone,
        password: hashedPassword,
        barbershop_id: requester.barbershop_id, // vem do token, nunca do body (RN018)
        role: 'BARBER' // fixo — este endpoint só cria barbeiros (RN004); ADMIN só nasce junto com a barbearia
    }

    const createdUser = await createUser(user)

    // Nunca deixa a senha (mesmo hasheada) sair da API.
    // Desestruturar e descartar é mais seguro que "delete user.password",
    // porque não corre risco de esquecer e devolver o objeto original em outro caminho.
    const { password: _, ...safeUser } = createdUser

    return safeUser
}

export async function listUsers(requester) {
    const users = await listUsersByBarbershop(requester.barbershop_id)
    return users
}


export async function getUser(id, requester) {
    const user = await findUserById(id)

    if (!user || user.barbershop_id !== requester.barbershop_id) {
        throw AppError('User not found', 404)
    }

    

    const { password: _, ...safeUser } = user
    
    return safeUser
}

export async function editUser(id, data, requester) {
    // Mesmo padrão de busca + isolamento por barbearia que você já usou
    // na getUser — resposta idêntica pra "não existe" e "existe mas não é seu" (RN018)
    const user = await findUserById(id)

    if (!user || user.barbershop_id !== requester.barbershop_id) {
        throw AppError('User not found', 404)
    }

    // PASSO 1: checagem de permissão pra campos sensíveis, ANTES de montar
    // qualquer coisa. "in" verifica se a chave existe no objeto, mesmo que
    // o valor seja falsy (ex: active: false não deve ser tratado como "não veio")
    const triedToChangeSensitiveField = 'role' in data || 'active' in data

    if (triedToChangeSensitiveField && requester.role !== 'ADMIN') {
        throw AppError('You do not have permission to change this field', 403)
    }

    // PASSO 2: monta o objeto campo por campo — nunca espalha "data" inteiro.
    // Começa vazio, só entra o que foi explicitamente decidido.
    const updateData = {}

    // Campos que qualquer um (ADMIN ou BARBER no próprio perfil) pode alterar
    if (data.name !== undefined) updateData.name = data.name
    if (data.phone !== undefined) updateData.phone = data.phone

    // PASSO 3: senha precisa passar pelo mesmo hash da criação (RN027)
    if (data.password !== undefined) {
        updateData.password = await bcrypt.hash(data.password, 10)
    }

    // Só chega aqui se passou pela checagem do Passo 1 — ou seja,
    // se 'role'/'active' estão em data, o requester já é garantidamente ADMIN
    if (data.role !== undefined) updateData.role = data.role
    if (data.active !== undefined) updateData.active = data.active

    const updatedUser = await updateUser(id, updateData)

    const { password: _, ...safeUser } = updatedUser
    return safeUser
}


export async function removeUser(id, requester) {
    // Mesmo padrão de sempre: busca + isolamento por barbearia (RN018)
    const user = await findUserById(id)

    if (!user || user.barbershop_id !== requester.barbershop_id) {
        throw AppError('User not found', 404)
    }

    
    if (user.id === requester.id) {
        throw AppError('You cannot deactivate your own account', 400)
    }

    const deactivatedUser = await deactivateUser(id)


    if (!deactivatedUser) {
        throw AppError('User is already inactive', 409)
    }

    const { password: _, ...safeUser } = deactivatedUser
    return safeUser
}