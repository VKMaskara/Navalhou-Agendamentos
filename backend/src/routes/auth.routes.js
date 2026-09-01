import Router from "express";
import AuthController from "../controllers/AuthController.js";
import loginValidator from "../validators/auth/loginValidator.js";


const router = Router();

router.post('/login', loginValidator, AuthController.login);
router.post('/refresh-token', AuthController.refresh);


export default router;