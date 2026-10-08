// src/controllers/ServiceController.js
import { registerService, listServices, getService, editService, removeService } from '../services/ServiceService.js'

class ServiceController {

    static async store(req, res) {
        const service = await registerService(req.body, req.user)
        return res.status(201).json(service)
    }

    static async index(req, res) {
        // req.query vem sempre como string ("true"/"false"), nunca boolean de
        // verdade — precisa converter aqui antes de passar pro Service, que
        // espera true/false/undefined.
        const activeOnly =
            req.query.active === 'true' ? true :
            req.query.active === 'false' ? false :
            undefined

        const services = await listServices(req.user, activeOnly)
        return res.status(200).json(services)
    }

    static async show(req, res) {
        const service = await getService(req.params.id, req.user)
        return res.status(200).json(service)
    }

    static async update(req, res) {
        const service = await editService(req.params.id, req.body, req.user)
        return res.status(200).json(service)
    }

    static async destroy(req, res) {
        const service = await removeService(req.params.id, req.user)
        return res.status(200).json(service)
    }
}

export default ServiceController