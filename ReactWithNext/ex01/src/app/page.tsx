"use client"
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main
      className="
      w-screen h-screen 
      flex flex-col justify-center items-center
      "
    >
      <div
        className="
        flex flex-col gap-y-2
        border-2 border-solid border-black
        p-2 w-3/4
        rounded
        "
      >
        <h1 className="text-center text-lg font-medium">ADICIONE UMA TAREFA</h1>
        <Form />
      </div>
    </main>
  );
}
