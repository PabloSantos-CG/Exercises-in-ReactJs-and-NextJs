import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z
    .string()
    .email("*E-mail inválido")
    .regex(
      /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]{3,}@[a-z]{3,}\.[a-z]{3,}(\.[a-z]+)?/,
      "*Formato errado"
    ),
  password: z
    .string()
    .min(8, "*Sua senha deve conter no mínimo 8 caracteres")
    .max(30, "*Sua senha não pode ultrapassar 30 caracteres")
    .regex(
      /(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}/,
      "*Sua senha deve conter no mínimo uma letra maiúscula, um número e uma letra minúscula"
    ),
});
