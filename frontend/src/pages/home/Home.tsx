import AppCard from '../../components/AppCard/AppCard'
import CategoryFilterBar from '../../components/CategoryFilterBar/CategoryFilterBar'
import Hero from '../../components/Hero/Hero'
import Pagination from '../../components/Pagination/Pagination'
import SortBar from '../../components/Sortbar/SortBar'
import classes from './Home.module.css'

export default function Home() {
    return (
        <div className={classes.page}>
            <Hero />
            <CategoryFilterBar />
            <SortBar />
            <div className={classes.card_grid}>
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                <AppCard />
                
            </div>
            <Pagination/>
        </div>
    )
}
