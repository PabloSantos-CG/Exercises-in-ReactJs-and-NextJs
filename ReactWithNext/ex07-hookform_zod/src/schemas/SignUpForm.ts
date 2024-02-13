import { z } from "zod";

export const SignUpFormSchema = z.object({
  email: z
    .string()
    .email("*E-mail inválido")
    .regex(
      /^[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9-]+\.)+[a-zA-Z]{3,}$/,
      "*Formato errado"
    ),
  password: z.string().min(8, "*Sua senha deve conter no mínimo 8 caracteres"),
});
