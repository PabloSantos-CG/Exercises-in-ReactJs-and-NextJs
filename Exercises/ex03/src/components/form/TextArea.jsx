import style from './style.module.css'

export default function TextArea() {
  return (
    <div>
      <textarea 
        className={style.textArea}
        placeholder='Faça uma breve descrição...'
        required
      >

      </textarea>
    </div>
  )
}