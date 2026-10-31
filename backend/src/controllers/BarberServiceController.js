import {
    linkService,
    listMyServices,
    unlinkService
} from '../services/BarberServiceService.js';

class BarberServiceController {
    static async link(req, res) {
        const service = await linkService(req.body.service_id, req.user);
        return res.status(201).json(service);
    }

    static async list(req, res){
        const services = await listMyServices(req.user);
        return res.status(200).json(services);
    }

    static async unlink(req, res) {
        const service = await unlinkService(req.params.serviceId, req.user);
        return res.status(200).json(service);
    }

}

export default BarberServiceController;