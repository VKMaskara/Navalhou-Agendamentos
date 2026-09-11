import { registerUser, listUsers, getUser, editUser, removeUser } from '../services/UserService.js'

class UserController {

    static async register(req, res) {
        const user = await registerUser(req.body, req.user)
        return res.status(201).json(user)
    }

    static async list(req, res) {
        const users = await listUsers(req.user)
        return res.status(200).json(users)
    }

    static async get(req, res) {
        const user = await getUser(req.params.id, req.user)
        return res.status(200).json(user)
    }

    static async edit(req, res) {
        const user = await editUser(req.params.id, req.body, req.user)
        return res.status(200).json(user)
    }

    static async deactivate(req, res) {
        const user = await removeUser(req.params.id, req.user)
        return res.status(200).json(user)
    }
}

export default UserController