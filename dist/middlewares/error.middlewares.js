"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const appError_1 = require("../utils/appError");
const errorMiddleware = (err, _req, res, _next) => {
    if (err instanceof appError_1.AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        });
    }
    console.error(err);
    return res.status(500).json({
        success: false,
        message: "Internal server error"
    });
};
exports.errorMiddleware = errorMiddleware;
