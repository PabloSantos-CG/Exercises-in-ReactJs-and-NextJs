import { SignUpFormSchema } from "@/schemas/SignUpForm";
import { z } from "zod";

export type SignUpFormTypeSchema = z.infer<typeof SignUpFormSchema>;
