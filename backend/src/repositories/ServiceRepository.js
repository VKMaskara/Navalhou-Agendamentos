import knex from '../database/connection.js'


export async function findServiceById(id) {
    const service = await knex('services').where({ id }).first()
    return service
}

export async function createService(data) {
    const service = {
        'name': data.name,
        'description': data.description,
        'duration': data.duration,
        'price': data.price,
        'barbershop_id': data.barbershop_id,
        'active': true
    }
    const [createdServices] = await knex('services').insert(service).returning('*')

    return createdServices
}

export async function updateService(id, data) {
    const [updatedServices] = await knex('services')
        .where({ id })
        .update({ ...data, updated_at: knex.fn.now() })
        .returning('*')

    return updatedServices
}

export async function deactivateService(id) {
    const [deactivatedService] = await knex('services')
        .where({ id, active: true }) // só desativa quem ainda está ativo
        .update({ active: false, updated_at: knex.fn.now() })
        .returning('*')

    return deactivatedService
}

export async function findAllByBarbershop(barbershopId, activeOnly) {
    const query = knex('services').where({ barbershop_id: barbershopId })

    if (activeOnly === true) {
        query.where({ active: true })
    } else if (activeOnly === false) {
        query.where({ active: false })
    } 

    return query

}
