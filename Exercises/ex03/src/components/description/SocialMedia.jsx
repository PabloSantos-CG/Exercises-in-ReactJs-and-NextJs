import style from './style.module.css'

export default function SocialMedia() {
  return (
    <div
      className={style.SocialMedia}
    >
      <a 
        href="https://www.linkedin.com/"
        target="_blank"
      >
        Linkedin
      </a>

      <a 
        href="https://www.instagram.com/"
        target="_blank"
      >
        Instagram
      </a>
    </div>
  )
}