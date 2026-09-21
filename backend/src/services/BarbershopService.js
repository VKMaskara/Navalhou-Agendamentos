import bcrypt from 'bcryptjs'
import {
    findBarbershopById,
    createBarbershop,
    updateBarbershop,
    deactivateBarbershop,
    findBarbershopByEmail,
    findBarbershopByCNPJ
} from '../repositories/BarbershopRepository.js'
import { findUserByEmail, createUser } from '../repositories/UserRepository.js'
import AppError from '../utils/AppError.js'
import knex from '../database/connection.js'



export async function registerBarbershop(data) {
    const { email, cnpj, owner_name, password } = data

    // Validadação de duplicidadde
   const [existingBarbershopEmail, existingUserEmail, existingCnpj] = await Promise.all([
    findBarbershopByEmail(email),
    findUserByEmail(email),
    findBarbershopByCNPJ(cnpj)
])

    if (existingBarbershopEmail || existingUserEmail) {
        throw AppError('Email already in use', 409)
    }

    if (existingCnpj) {
        throw AppError('CNPJ already in use', 409)
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Cria barbearia e dono em transação -> Se qualquer uma das duas falhar, nenhuma é criada.
    return await knex.transaction(async (trx) => {
        const barbershop = await createBarbershop({
            fantasy_name: data.fantasy_name,
            corporate_name: data.corporate_name,
            cnpj: data.cnpj,
            phone: data.phone,
            email: data.email,
            logo: data.logo,
            zip_code: data.zip_code,
            street: data.street,
            number: data.number,
            district: data.district,
            city: data.city,
            state: data.state
        }, trx)

        const user = await createUser({
            name: owner_name,
            email: data.email,
            phone: data.phone,
            password: hashedPassword,
            barbershop_id: barbershop.id,
            role: 'ADMIN'
        }, trx)


        // Nunca deixa a senha (mesmo hasheada) sair da API.
        // Desestruturar e descartar é mais seguro que "delete user.password",
        // porque não corre risco de esquecer e devolver o objeto original em outro caminho.
        const { password: _, ...safeUser } = user

        return {
            barbershop,
            owner: safeUser
        }
    })
}

export async function getBarbershop(id, requester) {
    const barbershop = await findBarbershopById(id)

    // Valida se a barbearia existe e se o usuário tem permissão para acessá-la
    // (mesma resposta pros dois casos — evita enumeration attack, igual RN018 no Users)
    if (!barbershop || barbershop.id !== requester.barbershop_id) {
        throw AppError('Barbershop not found', 404)
    }

    // barbershops não tem coluna password — não precisa sanitizar nada
    return barbershop
}

export async function editBarbershop(id, data, requester) {
    // Buscar o ID e fazer o isolamento
    const barbershop = await findBarbershopById(id) // recebe o id 

    if (!barbershop || barbershop.id !== requester.barbershop_id) { // O ID da barbearia é estritamente diferente do ID da barbearia de quem está fazendo a requisição?
        throw AppError('Barbershop not found', 404) 
    }

    // Verificação de acesso
    if(requester.role !== "ADMIN"){ // O role é estritamente diferente de ADMIN?
        throw AppError('Only the barbershop admin can edit these detalis', 403)
    }


    const updateData = {} // Objeto com os campos que vão ser editados vão ser salvos

    if (data.fantasy_name !== undefined) updateData.fantasy_name = data.fantasy_name
    if (data.corporate_name !== undefined) updateData.corporate_name = data.corporate_name
    if (data.phone !== undefined) updateData.phone = data.phone
    if (data.logo !== undefined) updateData.logo = data.logo
    if (data.zip_code !== undefined) updateData.zip_code = data.zip_code
    if (data.street !== undefined) updateData.street = data.street
    if (data.number !== undefined) updateData.number = data.number
    if (data.district !== undefined) updateData.district = data.district
    if (data.city !== undefined) updateData.city = data.city
    if (data.state !== undefined) updateData.state = data.state

    const updatedBarbershop = await updateBarbershop(id, updateData) // Chama o repository que já faz o update

    return updatedBarbershop

}

export async function removeBarbershop(id, requester) {
    // Buscar o ID e fazer o isolamento
    const barbershop = await findBarbershopById(id) // recebe o id 

    if (!barbershop || barbershop.id !== requester.barbershop_id) { // O ID da barbearia é estritamente diferente do ID da barbearia de quem está fazendo a requisição?
        throw AppError('Barbershop not found', 404) 
    }

    // Verificação de acesso
    if (requester.role !== "ADMIN") { // O role é estritamente diferente de ADMIN?
        throw AppError('Only the barbershop admin can deactivate it', 403)
    }

    const deactivatedBarbershop = await deactivateBarbershop(id)

    if (!deactivatedBarbershop) {
        throw AppError('Barbershop is already inactive', 409)
    }

    return deactivatedBarbershop
}