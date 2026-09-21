import knex from '../database/connection.js'


export async function findBarbershopById(id) {
    const barbershop = await knex('barbershops').where({ id }).first()
    return barbershop
}

export async function findBarbershopByEmail(email) {

    const barbershop = await knex('barbershops').where({ email }).first()
    return barbershop
}

export async function findBarbershopByCNPJ(cnpj) {
    const barbershop = await knex('barbershops').where({ cnpj }).first()
    return barbershop
}

export async function createBarbershop(data, trx = knex) {
    const barbershop = {
        'fantasy_name': data.fantasy_name,
        'corporate_name': data.corporate_name,
        'cnpj': data.cnpj,
        'phone': data.phone,
        'email': data.email,
        'logo': data.logo,
        'zip_code': data.zip_code,
        'street': data.street,
        'number': data.number,
        'district': data.district,
        'city': data.city,
        'state': data.state,
        'active': true,
    }

    const [createdBarbershop] = await trx('barbershops')
        .insert(barbershop)
        .returning('*')

    return createdBarbershop
}

export async function updateBarbershop(id, data) {
    const [barbershop] = await knex('barbershops')
        .where({ id })
        .update({ ...data, updated_at: knex.fn.now() })
        .returning('*')

    return barbershop
}

export async function deactivateBarbershop(id) {
    const [deactivatedBarbershop] = await knex('barbershops')
        .where({ id, active: true }) // só desativa quem ainda está ativo
        .update({ active: false, updated_at: knex.fn.now() })
        .returning('*')

    return deactivatedBarbershop
}

