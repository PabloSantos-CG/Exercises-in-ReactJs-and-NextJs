import style from './style.module.css'
import Description from './description/Description'
import Form from './form/Form'

export default function Container() {
  return (
    <div
      className={style.container}
    >
      <Description />
      <Form />
    </div>
  )
}