import knex from '../database/connection.js'

export async function findUserByEmail(email) {
    const user = await knex('users').where({ email }).first()

    return user
}

export async function findUserById(id) {
    const user = await knex('users').where({ id }).first()

    return user
}

// Recebe barbershopId como parâmetro obrigatório — quem chama essa função
// é OBRIGADO a dizer de qual barbearia quer a lista. Isso é o que
// implementa a RN018 nesta camada: a query nunca roda sem esse filtro.
export async function listUsersByBarbershop(barbershopId) {
    const users = await knex('users')
        .where({ barbershop_id: barbershopId }) 
        .select(
            'id',
            'name',
            'email',
            'phone',
            'role',
            'active',
            'created_at',
            'updated_at'
        )

    return users
}

export async function createUser(user) {
    const [createdUser] = await knex('users')
    .insert(user)
    .returning('*')
    return createdUser
}

export async function updateUser(id, user) {
      const [updatedUser] = await knex('users')
    .where({ id })
    .update({...user, updated_at: knex.fn.now()})
    .returning('*')

    return updatedUser
}

export async function deactivateUser(id) {
   const [deactivatedUser] = await knex('users')
        .where({ id, active: true }) // só desativa quem ainda está ativo
        .update({ active: false, updated_at: knex.fn.now() })
        .returning('*')

    return deactivatedUser 
}
