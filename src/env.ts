import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  ENV: z.enum(["dev", "prod", "staging"]),
  PORT: z.coerce.number().min(1000),
  DATABASE_URL: z.string().url()
});

export const env = envSchema.parse(process.env);
