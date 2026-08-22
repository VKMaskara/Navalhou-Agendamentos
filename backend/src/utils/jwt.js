import jwt from 'jsonwebtoken'

export const generateAccessToken = (user) => {
    const payload = {
        role: user.role,
        barbershop_id: user.barbershop_id,
    }

    const secret = process.env.JWT_ACCESS_SECRET

    const options = {
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        subject: user.id
    }

    return jwt.sign(payload, secret, options)
}

export const generateRefreshToken = (user) => {
    

    const secret = process.env.JWT_REFRESH_SECRET

    const options = {
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        subject: user.id
    }

    return jwt.sign({}, secret, options)
}

export const verifyAccessToken = (token) => {
    const secret = process.env.JWT_ACCESS_SECRET
    jwt.verify(token, secret)
    
}

export const verifyRefreshToken = (token) =>{
    const secret = process.env.JWT_REFRESH_SECRET
    jwt.verify(token, secret)
}
