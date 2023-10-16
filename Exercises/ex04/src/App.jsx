import { useState } from "react"

export default function App() {
  const [generate, setGenerate] = useState('')
  
  return (
    <div className="container">
      <h1>Gerador de Senhas</h1>

      <div className="buttonContainer">
        <button
          
        >
          Gerar!
        </button>

        <button
        >
          Copiar
        </button>

      </div>

      <input type="text" disabled id="password"/>
    </div>
  )
}