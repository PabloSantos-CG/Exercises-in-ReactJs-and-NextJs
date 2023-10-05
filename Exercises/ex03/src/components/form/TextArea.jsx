import style from './style.module.css'

export default function TextArea() {
  return (
    <div>
      <textarea 
        className={style.textArea}
        placeholder='Faça uma breve descrição...'
        required
        maxLength={1000}
      >
      </textarea>
    </div>
  )
}