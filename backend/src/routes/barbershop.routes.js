import { Router } from 'express'
import BarbershopController from '../controllers/BarbershopController.js'
import { createBarbershopValidator, updateBarbershopValidator } from '../validators/barbershop/barbershopValidator.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

// Rota pública — ninguém está logado ainda nesse momento (RN019)
router.post('/', createBarbershopValidator, BarbershopController.register)

// As 3 rotas abaixo exigem estar logado — a checagem de posse (e, no
// edit/deactivate, de ADMIN) já está dentro do Service
router.get('/:id', authMiddleware, BarbershopController.get)
router.put('/:id', authMiddleware, updateBarbershopValidator, BarbershopController.edit)
router.delete('/:id', authMiddleware, BarbershopController.deactivate)

export default router