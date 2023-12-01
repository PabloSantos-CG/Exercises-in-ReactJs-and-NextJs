"use client";
import InputForm from "@/components/InputForm";
import { SignUpForm } from "@/types/SignUpForm";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Home() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-2">Log In</h1>
      <form
        className="flex flex-col m-2 gap-y-2 text-black w-72"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        
        <InputForm 
         control={control} 
         name="user"
         rules={{ required: true, minLength: 4 }}
        />
        
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
        {errors.password?.type === "required" && (
          <p className="text-red-500 text-xs">
            *Campo obrigatório
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
