import classes from './Login.module.css'

export default function Login() {
  const title = "Login Form";
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <h1>{title}</h1>
        <form action="" className={classes.login_form}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='password' />
          </div>
          
          <button>Submit</button>
        </form>
      </div>

    </div>
  )
}
