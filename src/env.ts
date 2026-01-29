import "dotenv/config";
import { z } from "zod";

const envSchema = z
  .object({
    ENV: z.enum(["dev", "prod", "staging"]),
    PORT: z.coerce.number().min(1000),
    DATABASE_URL: z.string().url(),

    // AWS
    AWS_REGION: z.string().min(1),
    AWS_S3_BUCKET: z.string().min(3),
    AWS_ACCESS_KEY_ID: z.string().min(10).optional(),
    AWS_SECRET_ACCESS_KEY: z.string().min(10).optional()
  })
  .superRefine((env, ctx) => {
    if (env.ENV === "dev") {
      if (!env.AWS_ACCESS_KEY_ID || !env.AWS_SECRET_ACCESS_KEY) {
        ctx.addIssue({
          path: ["AWS_ACCESS_KEY_ID"],
          message: "AWS credentials required in dev",
          code: "custom"
        });
      }
    }

    if (env.ENV === "prod") {
      if (env.AWS_ACCESS_KEY_ID || env.AWS_SECRET_ACCESS_KEY) {
        ctx.addIssue({
          path: ["AWS_ACCESS_KEY_ID"],
          message: "Do not use AWS access keys in prod (use IAM Role)",
          code: "custom"
        });
      }
    }
  });

export const env = envSchema.parse(process.env);
