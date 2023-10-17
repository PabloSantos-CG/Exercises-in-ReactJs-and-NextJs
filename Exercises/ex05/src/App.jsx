import { useState } from "react"

export default function App() {
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')
  const [dataComments, setDatacomments] = useState([])

  function handler(ev) {
    ev.preventDefault()

    const newComment = {
      author,
      comment,
      //....
    }

    setAuthor('')
    setComment('')
  }

  return (
    <div id="container">
      <h1>Seção de Comentários</h1>
      <form 
        style={{
          display:"flex",
          flexDirection: "column",
          rowGap: ".5rem"
        }}
        onSubmit={handler}
      >
      
        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        id="email" 
        required
        value={author}
        onChange={ev => setAuthor(ev.target.value)}
        />
      
        <label htmlFor="comentario">Comentário</label>
        <textarea 
          id="comentario" 
          cols="30" 
          rows="10"
          style={{resize: "none"}}
          required
          value={comment}
          onChange={ev => setComment(ev.target.value)}
        />

        <button>Enviar Comentário</button>
      </form>
      <hr />

      <section id="comentContainer">

      </section>
    </div>
  )
}
