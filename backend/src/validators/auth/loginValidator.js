import AppError from "../../utils/AppError.js";

const loginValidator = (req, res, next) => { // Validar los campos de entrada -> Essa éumafunção de middleware

    const {email, password} = req.body

    if (!email || !password) {
        return next( AppError("Please provide email and password", 400));
    }

    if (typeof email !== "string" || typeof password !== "string") {
        return next( AppError("Email and password must be strings", 400));
    }



    next();
};


export default loginValidator;