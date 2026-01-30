"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
// import { errorHandler } from "./middlewares/error.middleware";
function buildApp() {
    const app = (0, express_1.default)();
    // core middleware
    app.use((0, cors_1.default)({
        origin: ["*"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    // routes
    (0, routes_1.registerRoutes)(app);
    // error handler (LAST)
    //   app.use(errorHandler);
    return app;
}
