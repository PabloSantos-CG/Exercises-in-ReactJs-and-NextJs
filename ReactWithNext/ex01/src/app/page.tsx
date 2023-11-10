import { peopleList } from "@/data/peopleList"

export default function Home() {
  const list = peopleList
  const date = new Date()

  return (
    <main 
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <h1>Data e Hora ( {date.toLocaleString()} )</h1>
      <h2>Pessoas do meu bairro</h2>

      {list.length > 0 &&
        list.map((people)=> 
          <ul key={people.id}>
            <li>Nome: {people.name}</li>
            <li>Sobre: {people.details}</li>
            <li>Filhos: {people.children}</li>
          </ul>
        )
      }
    </main>
  )
}
