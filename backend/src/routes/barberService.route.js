import { Router } from 'express';
import BarberServiceController from '../controllers/BarberServiceController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createBarberServiceValidator } from '../validators/barberService/barberServiceValidator.js';

const router = Router();

// Todas as rotas exigem login; a checagem de BARBER (RN007) está dentro do Service
router.use(authMiddleware);

router.post('/', createBarberServiceValidator, BarberServiceController.link);
router.get('/', BarberServiceController.list);
router.delete('/:serviceId', BarberServiceController.unlink);

export default router;