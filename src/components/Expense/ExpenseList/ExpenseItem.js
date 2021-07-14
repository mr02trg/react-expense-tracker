import Card from "../../CommonUI/Card";
import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const {expenseName, expenseDate, expenseAmount} = props.data;

  return (
    <Card>
      <div className="expense-item-wrapper">
        <ExpenseDate expenseDate={expenseDate}></ExpenseDate>
        <div className="expense-name">{expenseName}</div>
        <div className="expense-amount">$ {Number(expenseAmount).toFixed(2)}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;