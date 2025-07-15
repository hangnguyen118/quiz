import classes from './Hero.module.css';
import background from '../../assets/images/hero.jpg';
export default function Hero() {
    const title = "Welcome to the Summer Tide English Quiz!";
    const subtitle = "Test your knowledge and have fun learning!";
    return (
        <div className={classes.hero_section}>
            <div className={classes.container}>
                <div className={classes.hero_content}>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <div><button>How to guilde</button></div>
                </div>
                <div className={classes.hero_img}>
                    <img src={background} alt="HERO_BACKGROUND" />
                </div>
            </div>
        </div>
    )
}
