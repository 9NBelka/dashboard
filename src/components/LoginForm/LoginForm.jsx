import { Field, Formik, Form} from "formik";
import css from './LoginForm.module.css'

export default function LoginForm(){
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return(
     <Formik initialValues={{
      email: "",
      password: "",
    }}
    onSubmit={handleSubmit}
    >  
      <Form autoComplete="off" className={css.formik}>
        <label className={css.label}>
          <h4 className={css.text}>Email:</h4>
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          <h4 className={css.text}>Password:</h4>
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.buttonLogIn}>Log In</button>
      </Form>
    </Formik>
  )
}