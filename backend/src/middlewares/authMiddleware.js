import { verifyAccessToken } from '../utils/jwt.js'
import AppError from '../utils/AppError.js'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw AppError('Access denied', 401)
    }

    const [scheme, token] = authHeader.split(' '); // Formato: Bearer TOKEN


    if (scheme !== 'Bearer' || !token) {
        throw AppError('Access denied', 401)
    }

    try {
        const decoded = verifyAccessToken(token)
        req.user = {
            id: decoded.sub,
            role: decoded.role,
            barbershop_id: decoded.barbershop_id
        }
        next()
    } catch (error) {

        throw AppError('Invalid token', 401)
    }

}

export default authMiddleware