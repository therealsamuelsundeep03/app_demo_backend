"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = connectMongo;
const mongoose_1 = __importDefault(require("mongoose"));
const env_1 = require("../env");
async function connectMongo() {
    try {
        await mongoose_1.default.connect(env_1.env.DATABASE_URL, {
            autoIndex: env_1.env.ENV !== "prod"
        });
        console.log("✅ MongoDB connected");
    }
    catch (err) {
        console.error("❌ MongoDB connection failed");
        process.exit(1);
    }
}
