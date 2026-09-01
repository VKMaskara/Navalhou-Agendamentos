import { authenticate, refreshAccessToken } from "../services/AuthService.js";

class AuthController {

    static async login(req, res) {

        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticate(email, password)


        return res.status(200).json({
            accessToken,
            refreshToken
        })

    }

    static async refresh(req, res) {
        const { refreshToken} = req.body
        const { accessToken } = await refreshAccessToken(refreshToken)

        return res.status(200).json({
            accessToken
        })
    }

}

export default AuthController