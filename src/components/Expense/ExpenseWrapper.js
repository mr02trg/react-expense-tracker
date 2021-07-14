import {useState} from 'react';

import ExpenseFilter from './ExpenseFilter/ExpenseFilter';
import ExpenseList from './ExpenseList/ExpenseList';
import ExpenseChart from './ExpenseChart/ExpenseChart';
import Card from '../CommonUI/Card';

import './ExpenseWrapper.css'

const ExpenseWrapper = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (data) => {
    setFilteredYear(data)
  }

  // NOTE how we can filter the expense list and the UI will update without the need for useState or useEffect here !!!!
  // when filteredYear state change, this component function will get invoked again, and thus the filteredExpenseList will get recalculated automatically!!!!
  const filteredExpenseList = props.expenseList.filter(expense => {
    const d = new Date(expense.expenseDate)
    return String(d.getFullYear()) === filteredYear
  });

  return (
    <Card color="red">
      <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
      {filteredExpenseList && filteredExpenseList.length > 0 ? (
        <>
          <ExpenseChart data={filteredExpenseList}></ExpenseChart>
          <ExpenseList data={filteredExpenseList}></ExpenseList>
        </>
      ) : (
        <div className="no-expense-message">No Expense Records found</div>
      )}

    </Card>
  )
}

export default ExpenseWrapper;