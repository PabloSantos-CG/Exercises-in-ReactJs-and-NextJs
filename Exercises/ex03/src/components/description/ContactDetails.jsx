import style from './style.module.css'

export default function ContactDetails() {
  return (
    <div
      className={style.ContactDetails}
    >
      <a 
        href="https://www.whatsapp.com/?lang=pt_BR"
        target='_blank'
      >
        +55 75 90000-0000
      </a>
      <a 
        href="https://outlook.live.com"
        target='_blank'
      >
        emailContato@outlook.com
      </a>
    </div>
  )
}