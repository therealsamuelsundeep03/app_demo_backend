import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  price: z.number().positive(),
  category: z.string(),
  images: z.array(z.string()).optional()
});

export const updateProductSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  category: z.string().optional(),
  images: z.array(z.string()).optional(),
  isActive: z.boolean().optional()
});
