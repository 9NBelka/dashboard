import { Field, Formik, Form} from "formik";
import css from './RegisterForm.module.css'

 const handleSubmit = (values, actions) => {
    console.log(values)
    actions.resetForm();
  };

export default function RegisterForm() {
   return(
    <Formik initialValues={{
      name: "",
      email: "",
      password: "",
    }}
    onSubmit={handleSubmit}
    >  
      <Form autoComplete="off" className={css.formik}>
        <label className={css.label}>
          
          <h4 className={css.text}>Username:</h4>
          <Field type="text" name="name" className={css.input}/>
        </label>
        <label className={css.label}>
          <h4 className={css.text}>Email:</h4>
          <Field type="email" name="email" className={css.input}/>
        </label>
        <label className={css.label}>
          <h4 className={css.text}>Password:</h4>
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.buttonLogIn}>Register</button>
      </Form>
    </Formik>
  );
}
