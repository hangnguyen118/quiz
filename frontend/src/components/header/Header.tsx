import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Header.module.css';
import { useState } from 'react';
import { faIdCard, faInfo, faRightFromBracket, faSliders } from '@fortawesome/free-solid-svg-icons';
import logo_img from '../../assets/images/logo.png';
import user_img from '../../assets/images/user1.webp';
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className={classes.header_img}><img src={logo_img} alt="LOGO" /></div>
                <div className={classes.nav}>
                    <ul className={classes.nav_list}>
                        <li className={classes.nav_item}>Home</li>
                        <li className={classes.nav_item}>About</li>
                        <li className={classes.nav_item}>Contact</li>
                    </ul>
                </div>
                <div className={classes.user_menu} onClick={toggleMenu}>
                    <div className={classes.header_img}><img src={user_img} alt="USER_AVATAR" /></div>
                    {isOpen && (
                        <ul className={classes.dropdown_menu}>
                            <li><FontAwesomeIcon icon={faIdCard} width={15} />Profile</li>
                            <li><FontAwesomeIcon icon={faSliders} width={15} />Setting</li>
                            <li><FontAwesomeIcon icon={faInfo} width={15} />Help</li>
                            <li><FontAwesomeIcon icon={faRightFromBracket} width={15} />Logout</li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}
