// src/routes/service.routes.js
import { Router } from 'express'
import ServiceController from '../controllers/ServiceController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createServiceValidator, updateServiceValidator } from '../validators/service_V/serviceValidator.js'

const router = Router()

// Todas as rotas exigem login — não existe endpoint público aqui
// (diferente de Barbershop, que tinha o registro público)
router.use(authMiddleware)

router.post('/', createServiceValidator, ServiceController.store)
router.get('/', ServiceController.index)
router.get('/:id', ServiceController.show)
router.put('/:id', updateServiceValidator, ServiceController.update)
router.delete('/:id', ServiceController.destroy)

export default router