import CategoryItem from '../CategoryItem/CategoryItem';
import classes from './CategoryFilterBar.module.css';
export default function CategoryFilterBar() {
    return (
        <div className={classes.category_bar}>
            <div className={classes.container}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
            </div>
        </div>
    )
}
