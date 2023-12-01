import { SignUpForm } from "@/types/SignUpForm";
import React from "react";
import { UseControllerProps, useController } from "react-hook-form";

export default function InputForm(props: UseControllerProps<SignUpForm>) {
  const { field, fieldState } = useController(props);
  return (
    <>
      <input {...field} type="text" placeholder={field.name} />
      {fieldState.error?.type === "minLength" && (
        <p className="text-red-500 text-xs">"Comprimento mínimo de 4"</p>
      )}
      {fieldState.error?.type === "required" && (
        <p className="text-red-500 text-xs">"Campo obrigatório"</p>
      )}
    </>
  );
}
