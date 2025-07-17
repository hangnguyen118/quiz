import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Footer.module.css';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <h2 className={classes.logo}>
          <span>LAXI - FRONTEND WEB DEVELOPER</span>
        </h2>
        <p className={classes.description}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      </div>
      <hr className={classes.sort_line} />
      <div className={classes.contact_info}>
        <p>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</p>
        <p>hangnguyen118@gmail.com | 0327840518</p>
        <div className={classes.social_icons}>
          <a href="#" className={classes.social_icon}><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" className={classes.social_icon}><FontAwesomeIcon icon={faGithub} /></a>
          <a href="#" className={classes.social_icon}><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
      <hr />
      <div className={classes.footer_bottom}>
        <p>Copyright © 2025 </p>
      </div>
    </div>
  )
}
