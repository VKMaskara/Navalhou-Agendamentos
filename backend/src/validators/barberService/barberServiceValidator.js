import AppError from "../../utils/AppError.js";

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const createBarberServiceValidator = (req, res, next) => {
    const { service_id } = req.body;

    if (!service_id) {
        return next(AppError("Please provide service_id", 400));
    }

    if (typeof service_id !== "string") {
        return next(AppError("service_id must be a string", 400));
    }

    // a coluna é uuid: sem essa checagem, um valor qualquer chega no
    // Postgres e vira um 500 ("invalid input syntax for type uuid")
    if (!UUID_REGEX.test(service_id)) {
        return next(AppError("service_id must be a valid UUID", 400));
    }

    next();
};

export { createBarberServiceValidator };