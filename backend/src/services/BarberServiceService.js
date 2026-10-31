import {
    findBarberService,
    createBarberService,
    deleteBarberService,
    listServicesByBarber
} from "../repositories/BarberServiceRepository.js";
import { findServiceById } from '../repositories/ServiceRepository.js';
import { normalizeService } from '../utils/normalizeService.js'; // Note a mudança aqui em listMyService
import AppError from '../utils/AppError.js';

export async function linkService(serviceId, requester) {
    // 1. RN007 Fazer a validação
    if (requester.role !== 'BARBER') {
        throw  AppError("Only barbers can manage their own services", 403);
    }

    const service = await findServiceById(serviceId);

    // CORRIGIDO: Validação se o serviço existe e se pertence à mesma barbearia
    if (!service || service.barbershop_id !== requester.barbershop_id) {
        throw  AppError("Service not found", 404);
    }

    // Apenas serviços ativos
    if (!service.active) {
        throw  AppError("Service is inactive", 409);
    }

    const existingLink = await findBarberService(requester.id, serviceId);

    if (existingLink) {
        throw  AppError('Service already linked', 409);
    }

    // ADICIONADO: Faltava efetivamente salvar o vínculo no banco de dados!
    return await createBarberService(requester.id, serviceId);
}

export async function listMyServices(requester) {
    if (requester.role !== 'BARBER') {
        throw  AppError("Only barbers can manage their own services", 403);
    }

    const listServices = await listServicesByBarber(requester.id);

    // CORRIGIDO: Conflito de nomes e await desnecessário
    return listServices.map(normalizeService);
}

export async function unlinkService(serviceId, requester) {
    if (requester.role !== 'BARBER') {
        throw  AppError("Only barbers can manage their own services", 403);
    }

    const removed = await deleteBarberService(requester.id, serviceId);

    if (removed === 0) {
        throw  AppError("Service not found", 404);
    }

    return { message: "Service unlinked successfully" };
}
