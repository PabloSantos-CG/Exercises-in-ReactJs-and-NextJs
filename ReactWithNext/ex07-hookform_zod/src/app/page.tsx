"use client";
import { SignUpFormSchema } from "@/schemas/SignUpForm";
import { SignUpFormTypeSchema } from "@/types/SignUpFormType";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormTypeSchema>({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm: SubmitHandler<SignUpFormTypeSchema> = (data) => {
    console.log(data);
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
