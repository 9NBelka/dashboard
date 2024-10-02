import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from './RegisterPage.module.css'

export default function LoginPage() {
  return (
    <div>
      <h1 className={css.titleText}>Please register</h1>
      <RegisterForm />
    </div>
  )
}