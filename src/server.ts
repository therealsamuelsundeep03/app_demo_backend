import { buildApp } from "./app";
import { env } from "./env";
import { connectMongo } from "./db/mongo";

async function startServer() {
  await connectMongo(); // DB first

  const app = buildApp();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
}

startServer();
