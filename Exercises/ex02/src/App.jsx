import Description from './components/Description'
import Poster from './components/Poster'
import style from './styles/style.module.css'

export default function App() {
  return (
    <main className={ style.dFlex }>
      <section className={ style.card }>
        <Poster />
        <Description />
      </section>
    </main>
  )
}