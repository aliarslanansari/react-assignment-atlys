import { z } from "zod";

const envSchema = z.object({
  REACT_ENV: z.enum(["production", "staging", "development", "quality"]),
  REACT_LOGIN_USERNAME: z.string(),
  REACT_LOGIN_PASSWORD: z.string(),
});

const env = envSchema.parse(import.meta.env);

export default env;
