import { useState } from "react"

export default function App() {
  const [author, setAuthor] = useState('')
  const [comment, setComment] = useState('')
  const [dataComments, setDatacomments] = useState([])

  function handler(ev) {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random()* 9999),
      author,
      comment,
      date: new Date()
    }

    setDatacomments(state => [newComment, ...state])
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
          {dataComments.length > 0
            ? (
              dataComments.map((comment) => (
                <div key={comment.id}>
                  <h3>{comment.author}</h3>
                  <span>Em {comment.date.toLocaleString()}</span>
                  <p>{comment.comment}</p>
                </div>
              )))
              : (
                <p>Seja o primeiro a comentar...</p>
              )
          }
      </section>
    </div>
  )
}
