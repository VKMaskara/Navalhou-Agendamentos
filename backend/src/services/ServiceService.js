import {
    createService,
    findAllByBarbershop,
    findServiceById,
    updateService,
    deactivateService
} from "../repositories/ServiceRepository.js"
import AppError from '../utils/AppError.js'

// price vem do Postgres como string (decimal/numeric sempre vem assim,
// pra preservar precisão exata de dinheiro) — convertemos aqui, na
// saída da API, pra quem consome não precisar lidar com isso.
function normalizeService(service) {
    if (!service) return service
    return { ...service, price: Number(service.price) }
}

export async function registerService(data, requester) {
    // RN008 — só o ADMIN (proprietário) cadastra serviços
    if (requester.role !== 'ADMIN') {
        throw AppError('Only the barbershop admin can create services', 403)
    }

    const { name, description, duration, price } = data

    const service = {
        name,
        description,
        duration,
        price,
        barbershop_id: requester.barbershop_id, // vem do token, nunca do body (RN018)
    }

    const createdService = await createService(service)

    return normalizeService(createdService)
}

export async function listServices(requester, activeOnly) {
    // Qualquer um logado na barbearia pode ver o catálogo (ADMIN ou BARBER)
    const services = await findAllByBarbershop(requester.barbershop_id, activeOnly)
    return services.map(normalizeService)
}

export async function getService(id, requester) {
    const service = await findServiceById(id)

    if (!service || service.barbershop_id !== requester.barbershop_id) {
        throw AppError('service not found', 404)
    }

    return normalizeService(service)
}

export async function editService(id, data, requester) {
    const service = await findServiceById(id)

    if (!service || service.barbershop_id !== requester.barbershop_id) {
        throw AppError('service not found', 404)
    }

    // RN008 — só ADMIN edita, sem exceção pra "próprio perfil" (isso não existe aqui)
    if (requester.role !== 'ADMIN') {
        throw AppError('Only the barbershop admin can edit services', 403)
    }

    const updatedata = {}

    if (data.name !== undefined) updatedata.name = data.name
    if (data.description !== undefined) updatedata.description = data.description
    if (data.duration !== undefined) updatedata.duration = data.duration
    if (data.price !== undefined) updatedata.price = data.price
    if (data.active !== undefined) updatedata.active = data.active // reativa ou desativa via PUT
    const updatedService = await updateService(id, updatedata)

    return normalizeService(updatedService)
}

export async function removeService(id, requester) {
    // Mesmo padrão de sempre: busca + isolamento por barbearia (RN018)
    const service = await findServiceById(id)

    if (!service || service.barbershop_id !== requester.barbershop_id) {
        throw AppError('service not found', 404)
    }

    // RN008 — só ADMIN desativa
    if (requester.role !== 'ADMIN') {
        throw AppError('Only the barbershop admin can deactivate services', 403)
    }

    const deactivatedService = await deactivateService(id)

    if (!deactivatedService) {
        throw AppError('service is already inactive', 409)
    }

    return normalizeService(deactivatedService)
}