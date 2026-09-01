import knex from '../database/connection.js'

export async function findUserByEmail(email) {
    const user = await knex('users').where({ email }).first()

    return user
}

export async function findUserById(id) {
    const user = await knex('users').where({ id }).first()

    return user
}