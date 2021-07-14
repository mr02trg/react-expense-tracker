import { useState } from 'react';

import './ExpenseForm.css';

const INIT_FORM_STATE = {
  expenseName: '',
  expenseAmount: '',
  expenseDate: ''
}

const ExpenseForm = (props) => {
  const [formState, setFormState] = useState(INIT_FORM_STATE)

  const inputChangeHandler = (event) => {
    const inputName = event.target.name
    setFormState((prevState) => {
      return {
        ...prevState,
        [inputName]: event.target.value
      }
    })
    
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onExpenseFormSubmit(formState);
    setFormState(INIT_FORM_STATE)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-input">
        <div className="form-group">
          <label htmlFor="expenseName">Expense Name</label>
          <input type="text" id="expenseName" name="expenseName" value={formState.expenseName} onChange={inputChangeHandler}/>
        </div>
        <div className="form-group">
          <label htmlFor="expenseAmount">Amount</label>
          <input 
            type="number" id="expenseAmount" name="expenseAmount" 
            min="0" step="0.01"
            value={formState.expenseAmount}  onChange={inputChangeHandler}/>
        </div>
        <div className="form-group">
          <label htmlFor="expenseDate">Expense Date</label>
          <input type="date" id="expenseDate" name="expenseDate" value={formState.expenseDate}  onChange={inputChangeHandler}/>
        </div>
      </div>
      
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenseForm