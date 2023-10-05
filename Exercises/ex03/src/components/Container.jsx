import style from './style.module.css'
import CardDescription from './description/CardDescription'
import Form from './form/Form'

export default function Container() {
  return (
    <div
      className={style.container}
    >
      <CardDescription />
      <Form />
    </div>
  )
}