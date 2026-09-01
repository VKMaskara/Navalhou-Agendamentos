import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt.js";
import { findUserByEmail, findUserById } from "../repositories/UserRepository.js";
import { createRefreshToken, findByRefreshToken } from "../repositories/RefreshTokenRepository.js";
import AppError from "../utils/AppError.js";

import bcrypt from 'bcryptjs'

async function authenticate(email, password) {
    const user = await findUserByEmail(email)

    if(!user){
        throw  AppError('Invalid email or password', 401)
    }

    if(!user.active){
        throw  AppError('Invalid email or password', 401)
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        throw  AppError('Invalid email or password', 401)
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

async function refreshAccessToken(refreshToken) {
    if(!refreshToken){
        throw  AppError('Refresh token is required', 401)
    }

    let decoded
    try {
        decoded = verifyRefreshToken(refreshToken) // Identifica se o token é válido e decodifica o payload
    } catch (error) {
        throw  AppError('Invalid refresh token', 401)
    }
    

    const tokenRecord = await findByRefreshToken(refreshToken)
 
    if(!tokenRecord){
        throw  AppError('Refresh token not found', 401)
    }

    const user = await findUserById(decoded.sub)

    if(!user || !user.active){
        throw  AppError('User not found', 404)
    }

    const accessToken = generateAccessToken(user)
    return { accessToken }
}


export { authenticate, refreshAccessToken };