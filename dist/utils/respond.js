"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = void 0;
const respond = (res, data, statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        data
    });
};
exports.respond = respond;
