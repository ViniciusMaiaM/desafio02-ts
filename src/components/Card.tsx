import { Header } from "./Header/Header"
import { LoginButton } from "./Button/LoginButton"
import { login } from "../services/login"
export const Card = () => {
  return(
    <div>
      <Header />
      <LoginButton action={login} alert="Login"/>
    </div>
  )
}
