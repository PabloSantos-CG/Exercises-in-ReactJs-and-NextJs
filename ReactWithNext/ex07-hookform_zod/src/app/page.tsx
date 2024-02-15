"use client";
import { SignUpFormSchema } from "@/schemas/SignUpForm";
import { SignUpFormTypeSchema } from "@/types/SignUpFormType";
import { api } from "@/utils/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Teko } from "next/font/google";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

const teko = Teko({ subsets: ["latin"] });

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
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
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-full flex items-center justify-center bg-[#012030]">
      <form
        className="
          max-sm:w-full w-3/4 max-w-xl p-10
          flex flex-col gap-y-2
          bg-slate-200 rounded-md shadow-lg shadow-[#45c4b162]
        "
        onSubmit={handleSubmit(handleSignUpForm)}
      >
        <h1
          className={`${teko.className} text-3xl text-[#13678A] tracking-normal font-bold my-2`}
        >
          Acesse Sua Conta
        </h1>

        <div>
          <input
            {...register("email")}
            className="block w-full rounded-md border-0 mb-2 p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
            className="block w-full rounded-md border-0 mb-2 p-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            placeholder="Informe sua senha"
            autoComplete="off"
          />

          {errors.password && (
            <p className="text-red-500 text-xs">
              {errors.password.message as string}
            </p>
          )}
        </div>
        <p className=" text-indigo-600 text-sm my-1">
          Ainda não possui uma conta?{" "}
          <Link
            href="/register"
            className="hover: cursor-pointer hover:underline "
          >
            Clique aqui
          </Link>
        </p>

        <button
          type="submit"
          className="flex w-full justify-center rounded-md  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
