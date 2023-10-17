import { useState } from "react"

export default function App() {
  const [password, setPassword] = useState()
  const [textBtnCopy, setTextBtnCopy] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(12)
  
  function passwordGenerate() {
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz"
    const numbersCharacters = "0123456789"
    const specialCharacters = "!@#$%^&*()_+-=[]{}|:;<>,.?/~"

    let newPassword = ''

    for (let i = 0; i < (passwordSize/4); i++) {
      const positionUpperCase = Math.floor(Math.random()* uppercaseCharacters.length)
      const positionLowerCase = Math.floor(Math.random()* lowercaseCharacters.length)
      const positionNumberChar = Math.floor(Math.random()* numbersCharacters.length)
      const positionSpecialChar = Math.floor(Math.random()* specialCharacters.length)

      newPassword += uppercaseCharacters[positionUpperCase] + lowercaseCharacters[positionLowerCase] + numbersCharacters[positionNumberChar] + specialCharacters[positionSpecialChar]
    }
    
    setPassword(newPassword)
    setTextBtnCopy('Copiar')
  }

  function copyPassword() {
    window.navigator.clipboard.writeText(password)
    setTextBtnCopy('Copiado!')
  }

  return (
    <div className="container">
      <h1>Gerador de Senhas</h1>

      <div id="containerInputNumber">
        <label htmlFor="passwordLength">Tamanho da senha: </label>

        <input 
          type="number" 
          id="passwordLength" 
          min={4} 
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />

      </div>

      <div className="buttonContainer">
        <button onClick={passwordGenerate}>
          Gerar!
        </button>

        <button onClick={copyPassword}>
          {textBtnCopy}
        </button>
      </div>

      <input type="text" disabled value={password}/>
    </div>
  )
}