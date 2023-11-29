"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  user: string;
  email: string;
  password: number;
};

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-2">Log In</h1>
      <form
        className="flex flex-col m-2 gap-y-2 text-black w-72"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          placeholder="Nick de usuário"
          {...register("user", { required: true })}
        />
        {errors.user && (
          <p className="text-red-500 text-xs">*Campo obrigatório</p>
        )}
        <input
          type="email"
          placeholder="Exemplo@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs">*Campo obrigatório</p>
        )}
        <input
          type="password"
          placeholder="Sua senha cadastrada"
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 text-xs">
            *A senha deve ter no mínimo 8 caracteres
          </p>
        )}
        <button
          type="submit"
          className="
          border text-white hover:bg-white hover:text-black rounded-sm
          ease-linear duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
