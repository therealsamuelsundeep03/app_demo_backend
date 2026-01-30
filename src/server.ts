import { buildApp } from "./app";
import { env } from "./env";
import { connectMongo } from "./db/mongo";

async function startServer() {
  await connectMongo();

  const app = buildApp();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT || 8080}`);
  });
}

startServer();
