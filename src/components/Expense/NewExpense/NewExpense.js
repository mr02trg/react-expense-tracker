import { useState } from 'react';
import Card from "../../CommonUI/Card";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const newExpenseHandler = (newExpenseData) => {
    props.onNewExpense(newExpenseData)
  }

  return (
    <Card color="blue">
      {
        isEditing ? 
          <ExpenseForm onExpenseFormSubmit={newExpenseHandler}></ExpenseForm> :
          (
            <div className="new-expense">
              <button onClick={startEditingHandler}>Add New Expense</button>
            </div>
          )
      }
      
    </Card>
  )
}

export default NewExpense;