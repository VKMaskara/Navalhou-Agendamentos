import authenticate from "../services/AuthService.js";

class AuthController {

    static async login(req, res) {

        const { email, password } = req.body
        const { accessToken, refreshToken } = await authenticate(email, password)


        return res.status(200).json({
            accessToken,
            refreshToken
        })


    }

}

export default AuthController