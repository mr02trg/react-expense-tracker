import { useState } from 'react';

import NewExpense from './components/Expense/NewExpense/NewExpense';
import ExpenseWrapper from './components/Expense/ExpenseWrapper';

import './App.css';

const DUMMY_EXPENSE_DATA = [
  {
    expenseName: 'Laptop',
    expenseAmount: 3000,
    expenseDate: '2020-04-06'
  },
  {
    expenseName: 'Desk',
    expenseAmount: 500,
    expenseDate: '2020-08-09'
  },
  {
    expenseName: 'Food',
    expenseAmount: 50,
    expenseDate: '2019-06-06'
  },
  {
    expenseName: 'Honkai Impact',
    expenseAmount: 100,
    expenseDate: '2019-05-20'
  }
]

function App() {
  const [expenseList, setExpenseList] = useState(DUMMY_EXPENSE_DATA);

  const newExpenseHandler = (expenseData) => {
    setExpenseList((prevState) => {
      return [expenseData, ...prevState]
    })
  }

  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler}></NewExpense>
      <ExpenseWrapper expenseList={expenseList}></ExpenseWrapper>
    </div>
  );
}

export default App;
