"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require("dotenv/config");
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    ENV: zod_1.z.enum(["dev", "prod", "staging"]),
    PORT: zod_1.z.coerce.number().min(1000),
    DATABASE_URL: zod_1.z.string().url()
});
exports.env = envSchema.parse(process.env);
