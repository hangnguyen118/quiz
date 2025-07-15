import { faGrip } from '@fortawesome/free-solid-svg-icons';
import classes from './CategoryItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CategoryItem() {
    const name = "All Categories";
  return (
    <div className={classes.category_item}>
        <FontAwesomeIcon icon={faGrip} className={classes.item_icon} />
        <p>{name}</p>
    </div>
  )
}
