import AppError from '../utils/AppError.js'

const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user.role

        if (userRole !== requiredRole) {
            throw AppError('Access denied: insufficient permissions', 403)
        }

        next()
    }
}

export default roleMiddleware