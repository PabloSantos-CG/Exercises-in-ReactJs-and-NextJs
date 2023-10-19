import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: 'João',
    email: 'esquecíMeuEmail@gmail.com'
  }
  return (
    <UserContext.Provider value={user}>
      <h1>Usando contexto</h1>
      <UserInfo />
    </UserContext.Provider>
  )
}