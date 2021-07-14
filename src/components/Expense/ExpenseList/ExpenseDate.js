import { getMonthString } from "../../../utils/Utils"
import './ExpenseDate.css'

const ExpenseDate = ({expenseDate}) => {

  const myExpenseDate = new Date(expenseDate);

  if(!myExpenseDate) return null;

  const date = myExpenseDate.getDate()
  const month = myExpenseDate.getMonth()
  const year = myExpenseDate.getFullYear()

  return (
    <div className="expense-date">
      <div>{date}</div>
      <div>{getMonthString(month)}</div>
      <div>{year}</div>
    </div>
  )
}

export default ExpenseDate