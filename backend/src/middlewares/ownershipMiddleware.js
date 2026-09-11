import AppError from '../utils/AppError.js'

// Fábrica de middleware, mesmo padrão do roleMiddleware: recebe um
// argumento de configuração (o papel que sempre tem acesso total) e
// devolve a função de middleware de verdade.
const allowSelfOrRole = (role) => {
    return (req, res, next) => {
        // "quem está pedindo" vem do token, decodificado pelo authMiddleware
        const isSelf = req.user.id === req.params.id

        // "papel que sempre pode" — configurável na hora de usar o middleware
        const isAllowedRole = req.user.role === role

        if (!isSelf && !isAllowedRole) {
            throw AppError('Access denied: insufficient permissions', 403)
        }

        next()
    }
}

export default allowSelfOrRole