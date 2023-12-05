import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(3, "*Tamanho mínimo é 3")
    .max(20, "*Tamanho máximo é 20"),
  lastName: z
    .string()
    .optional(),
  age: z
    .number({ invalid_type_error: "*Apenas números" })
    .min(18, "*Apenas maiores de idade"),
});