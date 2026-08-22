import { findUserByEmail } from "../repositories/UserRepository.js";
import { createRefreshToken } from "../repositories/RefreshTokenRepository.js";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.js";

import bcrypt from 'bcryptjs'

async function authenticate(email, password) {
    const user = await findUserByEmail(email)

    if(!user){
        throw new Error('Invalid email or password')
    }

    if(!user.active){
        throw new Error('Invalid email or password')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        throw new Error('Invalid email or password')
    }

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    const EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d' // Default to 7 days if not set

    await createRefreshToken(user, refreshToken, EXPIRES_IN)
    return {
        accessToken,
        refreshToken
    }
}

export default authenticate