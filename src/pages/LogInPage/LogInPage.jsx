import LoginForm from "../../components/LoginForm/LoginForm";
import css from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <div>
      <h1 className={css.titleText}>Please log in</h1>
      <LoginForm />
    </div>
  )
}