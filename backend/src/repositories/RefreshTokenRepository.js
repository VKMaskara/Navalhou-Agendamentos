import knex from '../database/connection.js'
import ms from 'ms'

export async function createRefreshToken(user, refreshToken, EXPIRES_IN) {

 await knex('refresh_tokens').insert({
        user_id: user.id,
        token: refreshToken,
        expires_at: new Date(Date.now() + ms(EXPIRES_IN))
    })

}