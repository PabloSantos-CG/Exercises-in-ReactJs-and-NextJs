"use client"
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main
      className="
      w-screen h-screen 
      flex flex-col justify-center items-center
      bg-gray-300
      "
    >
      <div
        className="
        flex flex-col gap-y-4
        p-4 w-3/4
        rounded
        bg-gray-100
        shadow-lg
        "
      >
        <h1 className="text-center text-lg font-medium">ADICIONE UMA TAREFA</h1>
        <Form />
      </div>
    </main>
  );
}
