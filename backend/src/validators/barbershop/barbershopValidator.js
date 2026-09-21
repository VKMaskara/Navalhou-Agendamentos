import AppError from "../../utils/AppError.js";

const createBarbershopValidator = (req, res, next) => {
    const {
        fantasy_name,
        phone,
        email,
        owner_name,
        password,
        // cnpj fica fora dos obrigatórios — decisão sua
    } = req.body;

    if (!fantasy_name || !phone || !email || !owner_name || !password) {
        return next(AppError("Please provide fantasy_name, phone, email, owner_name and password", 400));
    }

    if (
        typeof fantasy_name !== "string" ||
        typeof phone !== "string" ||
        typeof email !== "string" ||
        typeof owner_name !== "string" ||
        typeof password !== "string"
    ) {
        return next(AppError("fantasy_name, phone, email, owner_name and password must be strings", 400));
    }

    if (password.length < 8) {
        return next(AppError("Password must be at least 8 characters", 400));
    }

    next();
};

const updateBarbershopValidator = (req, res, next) => {
    const {
        fantasy_name,
        corporate_name,
        phone,
        logo,
        zip_code,
        street,
        number,
        district,
        city,
        state
        // cnpj e email ficam de fora — não são editáveis por essa rota
    } = req.body;

    if (fantasy_name !== undefined && typeof fantasy_name !== "string") {
        return next(AppError("fantasy_name must be a string", 400));
    }
    if (corporate_name !== undefined && typeof corporate_name !== "string") {
        return next(AppError("corporate_name must be a string", 400));
    }
    if (phone !== undefined && typeof phone !== "string") {
        return next(AppError("phone must be a string", 400));
    }
    if (logo !== undefined && typeof logo !== "string") {
        return next(AppError("logo must be a string", 400));
    }
    if (zip_code !== undefined && typeof zip_code !== "string") {
        return next(AppError("zip_code must be a string", 400));
    }
    if (street !== undefined && typeof street !== "string") {
        return next(AppError("street must be a string", 400));
    }
    if (number !== undefined && typeof number !== "string") {
        return next(AppError("number must be a string", 400));
    }
    if (district !== undefined && typeof district !== "string") {
        return next(AppError("district must be a string", 400));
    }
    if (city !== undefined && typeof city !== "string") {
        return next(AppError("city must be a string", 400));
    }
    if (state !== undefined && typeof state !== "string") {
        return next(AppError("state must be a string", 400));
    }

    next();
};

export { createBarbershopValidator, updateBarbershopValidator };