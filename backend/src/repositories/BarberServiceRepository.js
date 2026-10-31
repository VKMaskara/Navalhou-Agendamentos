import knex from '../database/connection.js'

export async function findBarberService(barberId, serviceId) {
    const baberService = await knex('barber_services').where({ barber_id: barberId, service_id: serviceId }).first()
    return baberService
}

export async function createBarberService(barberId, serviceId) {
    const barberServiceData = {
        "barber_id": barberId,
        "service_id": serviceId
    }
    const [createdBarberService] = await knex("barber_services").insert(barberServiceData).returning('*')

    return createdBarberService
}

export async function deleteBarberService(barberId, serviceId) {
    const delBarberService = await knex("barber_services").where({ barber_id: barberId, service_id: serviceId }).del()

    return delBarberService
}

export async function listServicesByBarber(barberId) {
    const listService = await knex('barber_services').join('services', 'barber_services.service_id', "=", "services.id").where("barber_services.barber_id", barberId).select(
        'services.id as service_id',
        'services.name as service_name',
        'services.price',
        'services.duration',
        'services.active',
        'services.description'
    )

    return listService
}