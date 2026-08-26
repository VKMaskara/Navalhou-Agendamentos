import Router from "express";
import AuthController from "../controllers/AuthController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/login', AuthController.login);
router.get('/protected', authMiddleware, (req, res) => {
  return res.status(200).json({
    message: 'Access granted',
    user: req.user
  })
})

export default router;