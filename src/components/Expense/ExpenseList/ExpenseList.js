import ExpenseItem from "./ExpenseItem"

const ExpenseList = (props) => {
  return (
    <div className="expense-list">
      {props.data.map(expenseData => <ExpenseItem key={expenseData.expenseName} data={expenseData}></ExpenseItem>)}        
    </div>
  )
}

export default ExpenseList;