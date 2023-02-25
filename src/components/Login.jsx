import { useFormik } from "formik"

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <div>
          <label className="form-label" htmlFor="email">Username/Email</label>
          <input className="form-input" id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}></input>
        </div>
        <div>
          <label className="form-label" htmlFor="password">Password</label>
          <input className="form-input" id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Login;