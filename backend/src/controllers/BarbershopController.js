import {
    registerBarbershop,
    getBarbershop,
    editBarbershop,
    removeBarbershop
} from '../services/BarbershopService.js'

class BarbershopController {

    static async register(req, res) {
        const barbershop = await registerBarbershop(req.body)
        return res.status(201).json(barbershop)
    }

    static async get(req, res) {
        const barbershop = await getBarbershop(req.params.id, req.user)
        return res.status(200).json(barbershop)
    }

    static async edit(req, res) {
        const barbershop = await editBarbershop(req.params.id, req.body, req.user)
        return res.status(200).json(barbershop)
    }

    static async deactivate(req, res) {
        const barbershop = await removeBarbershop(req.params.id, req.user)
        return res.status(200).json(barbershop)
    }
}

export default BarbershopController