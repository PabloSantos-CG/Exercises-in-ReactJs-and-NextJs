import Input from './Input'
import SendButton from './SendButton'
import TextArea from './TextArea'
import style from './style.module.css'

export default function Form() {
  return (
    <div className={style.cardForm}>
      <h1>ENTRE EM CONTATO</h1>

      <form>
        <Input
          type='text'
          placeHolder='Nome Completo'
          minLength={7}
        />
        <Input
          type='email'
          placeHolder='Exemplo: email@outlook.com'
          minLength={10}
        />
        <TextArea />
        <SendButton />
      </form>

    </div>
  )
}