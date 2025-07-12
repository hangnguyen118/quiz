import logo_img from '../../assets/images/logo.png';
import classes from './Header.module.css';
export default function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img src={logo_img} alt="LOGO_IMAGE" width={50} className={classes.logo} />
                <div className={classes.nav}>
                    <ul className={classes.navList}>
                        <li className={classes.navItem}>
                            <a href="#" className={classes.navLink}>Home</a>
                        </li>
                        <li className={classes.navItem}>
                            <a href="#" className={classes.navLink}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
