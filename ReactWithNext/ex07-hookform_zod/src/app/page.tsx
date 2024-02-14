"use client";
import { SignUpFormSchema } from "@/schemas/SignUpForm";
import { SignUpFormTypeSchema } from "@/types/SignUpFormType";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { cookies } from "next/headers";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormTypeSchema>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm: SubmitHandler<SignUpFormTypeSchema> = async (
    data
  ) => {
    try {
      const result = await api.post("/register", data);
      const { id, token } = result.data;
      console.log(`Aqui o id: ${id} \nAqui o token: ${token}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit(handleSignUpForm)}>
        <div>
          <input
            {...register("email")}
            className="m-3 text-black"
            placeholder="Informe seu e-mail"
          />

          {errors.email && (
            <p className="text-red-500 text-xs">
              {errors.email.message as string}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("password")}
            className="m-3 text-black"
            placeholder="Informe sua senha"
            autoComplete="off"
          />

          {errors.password && (
            <p className="text-red-500 text-xs">
              {errors.password.message as string}
            </p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
