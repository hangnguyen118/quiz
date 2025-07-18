import classes from './Login.module.css';
import login_img from '../../assets/images/login.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
  const title = "Member Login";
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <div className={classes.login_box}>
          <div className={classes.login_image}>
            <img src={login_img} alt="LOGIN_IMG" />
          </div>
          <div className={classes.login_form}>
            <h2>{title}</h2>
            <p>Sign in to your account</p>
            <form action="">
              <div className={classes.input_group}>
                <input type="text" placeholder='Email address' />
              </div>
              <div className={classes.input_group}>
                <input type="password" placeholder='Password' />
              </div>
              <div className={classes.forgot_password}><a href='#'>Forgot Password</a></div>              
              <div className={classes.buttons}>
                <button type='submit' className={classes.btn_signin}>Sign in</button>
                <button type='button' className={classes.btn_signup}>Sign up</button>
              </div>
            </form>
            <div className={classes.social_login}>
              <p>OR LOGIN WITH</p>
              <div className={classes.social_icons}>
                <button className={classes.social_icon}><FontAwesomeIcon icon={faFacebook} /></button>
                <button className={classes.social_icon}><FontAwesomeIcon icon={faGoogle} /></button>
                <button className={classes.social_icon}><FontAwesomeIcon icon={faGithub} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
