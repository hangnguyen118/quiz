import classes from './Pagination.module.css'

export default function Pagination() {
  return (
    <div className={classes.pagination}>
      <button className={classes.btn_previous}>Previous</button>
      <button className={classes.btn_next}>1</button>
      <button className={classes.btn_next}>2</button>
      <button className={classes.btn_next}>3</button>
      <span className={classes.btn_next}>...</span>
      <button className={classes.btn_next}>30</button>
      <button className={classes.btn_next}>Next</button>
      <select name="" id="" className={classes.select_page}>
        <option value="">1 / Page</option>
        <option value="">2 / Page</option>
        <option value="">3 / Page</option>
      </select>
    </div>
  )
}
