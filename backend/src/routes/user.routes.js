import Router from "express";
import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";
import allowSelfOrRole from "../middlewares/ownershipMiddleware.js";

const router = Router();

// Aplica pra TODAS as rotas abaixo — ninguém chega no Controller
// sem estar logado. É isso que popula req.user em todo o resto do arquivo.
router.use(authMiddleware);

router.post('/', roleMiddleware('ADMIN'), UserController.register);
router.get('/', roleMiddleware('ADMIN'), UserController.list);

router.get('/:id', allowSelfOrRole('ADMIN'), UserController.get);
router.put('/:id', allowSelfOrRole('ADMIN'), UserController.edit);

router.delete('/:id', roleMiddleware('ADMIN'), UserController.deactivate);

export default router;