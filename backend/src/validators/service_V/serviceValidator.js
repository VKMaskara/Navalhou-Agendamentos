import AppError from "../../utils/AppError.js";

const createServiceValidator = (req, res, next) =>{
    const {
        name,
        description,
        duration,
        price,
        active
    } = req.body

    if (!name || !description || duration ==+ undefined || price === undefined){
        return next(AppError("Please provide name, description, duration and price", 400));
    }

    if (typeof name !== "string" || typeof description !== "string") {
        return next(AppError("name and description must be strings", 400));
    }

    // duration e price são NÚMEROS no JSON, não strings — diferente de tudo
    // que validamos até agora (fantasy_name, cnpj, etc. eram sempre texto)
    if (typeof duration !== "number" || typeof price !== "number") {
        return next(AppError("duration and price must be numbers", 400));
    }

    if (duration <= 0) {
        return next(AppError("duration must be greater than zero", 400));
    }

    if (price < 0) {
        return next(AppError("price cannot be negative", 400));
    }

     if (active !== undefined && typeof active !== "boolean") {
        return next(AppError("active must be a boolean", 400));
    }

    next();

    
}

const updateServiceValidator = (req, res, next) => {
    const { name, description, duration, price } = req.body;

    if (name !== undefined && typeof name !== "string") {
        return next(AppError("name must be a string", 400));
    }
    if (description !== undefined && typeof description !== "string") {
        return next(AppError("description must be a string", 400));
    }
    if (duration !== undefined) {
        if (typeof duration !== "number" || duration <= 0) {
            return next(AppError("duration must be a number greater than zero", 400));
        }
    }
    if (price !== undefined) {
        if (typeof price !== "number" || price < 0) {
            return next(AppError("price must be a number and cannot be negative", 400));
        }
    }

    next();
};

export { createServiceValidator, updateServiceValidator };



