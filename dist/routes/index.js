"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const product_route_1 = __importDefault(require("../modules/products/product.route"));
const user_route_1 = __importDefault(require("../modules/users/user.route"));
function registerRoutes(app) {
    app.use("/api/products", product_route_1.default);
    app.use("/api/user", user_route_1.default);
}
