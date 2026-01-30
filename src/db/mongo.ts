import mongoose from "mongoose";
import { env } from "../env";

export async function connectMongo() {
  try {
    await mongoose.connect(env.DATABASE_URL, {
      autoIndex: env.ENV !== "prod"
    });

    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed");
    process.exit(1);
  }
}
