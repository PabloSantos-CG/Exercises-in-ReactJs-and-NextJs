import style from './style.module.css'

export default function Input(props) {
  return (
    <div>
      <input 
          type={props.type}
          placeholder={props.placeHolder}
          required
          minLength={props.minLength}
          className={style.inputTxt}
        />
    </div>
  )
}