import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './AppCard.module.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import card_img from '../../assets/images/card.jpg';
import user_img from '../../assets/images/user1.webp';

export default function AppCard() {
    const title = "Phiên bản CSS tương ứng: SortBar.css";
    return (
        <div className={classes.app_card}>
            <img src={card_img} alt="" />
            <div className={classes.card_content}>
                <p className={classes.card_title}>{title}</p>
                <span className={classes.card_tag}>English</span>
                <div className={classes.card_info}>
                    <div className={classes.card_info_auth}>
                        <img src={user_img} alt="" />
                        <span>By Egsd</span>
                    </div>
                    <div className={classes.card_favorites}>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>33</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
