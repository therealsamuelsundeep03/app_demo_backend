"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const env_1 = require("./env");
const mongo_1 = require("./db/mongo");
async function startServer() {
    await (0, mongo_1.connectMongo)();
    const app = (0, app_1.buildApp)();
    app.listen(env_1.env.PORT, () => {
        console.log(`🚀 Server running on port ${env_1.env.PORT || 8080}`);
    });
}
startServer();
