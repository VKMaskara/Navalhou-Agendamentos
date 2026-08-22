import knex from '../database/connection.js'

export async function findUserByEmail(email) {
    const user = await knex('users').where({ email }).first()

    return user
}