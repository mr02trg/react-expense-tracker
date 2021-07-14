import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

  const changeHandler = (event) => {
    props.onFilterChange(event.target.value);
  }

  return (
    <div className="expense-filter-wrapper">
    <label htmlFor="expense-filter">Filter By:</label>
    <select 
      id="expense-filter" 
      className="expense-filter" 
      value={props.selected}
      onChange={changeHandler}>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
    </select>
    </div>
  )
}

export default ExpenseFilter;