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
            {...register("name")}
            className="m-3 text-black"
            placeholder="Nome"
          />

          {errors.name && (
            <p className="text-red-500 text-xs">
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("lastName")}
            className="m-3 text-black"
            placeholder="Sobrenome"
          />

          {errors.lastName && (
            <p className="text-red-500 text-xs">
              {errors.lastName.message as string}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("age", { valueAsNumber: true })}
            className="m-3 text-black"
            placeholder="Idade"
          />

          {errors.age && (
            <p className="text-red-500 text-xs">
              {errors.age.message as string}
            </p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
