import style from './style.module.css'



export default function SendButton() {
  return (
    <div>
      <button
        className={style.btnForm}
      >
        Enviar Informações
      </button>
    </div>
  )
}