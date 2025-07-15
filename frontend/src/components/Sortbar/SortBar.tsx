import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SortBar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SortBar() {
    return (
        <div className={classes.sort_bar}>
            <div className={classes.container}>
                <select name="" id="" className={classes.select}>
                    <option value="">Category</option>
                    <option value="">Category</option>
                    <option value="">Category</option>
                </select>
                <select name="" id="" className={classes.select}>
                    <option value="">Category</option>
                    <option value="">Category</option>
                    <option value="">Category</option>
                </select>
                <div className={classes.search}>
                    <input type="text" />
                    <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
            </div>
        </div>
    )
}
