import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Quiz.module.css';
import { faArrowRight, faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

export default function Quiz() {
    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.quiz}>
                    <div className={classes.quiz_header}>
                        <div className={classes.quiz_point}>
                            <FontAwesomeIcon icon={faFeatherPointed} />
                            <p>200 point</p>
                        </div>
                        <p>Question 50/100</p>
                        <p>Time 30:02</p>
                    </div>
                    <div className={classes.quiz_body}>
                        <p>Have you practiced sport or any physical activity out of your working hours at least 30 min or more during the last moath?</p>
                        <div className={classes.quiz_answers}>
                            <button className={classes.answer}>3 times or more per week</button>
                            <button className={classes.answer}>1 or 2 times per week</button>
                            <button className={classes.answer}>Less than 4 times per week</button>
                            <button className={classes.answer}>I don't practise sport during the month</button>
                        </div>
                        <button className={classes.btn_submit}>Next <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
