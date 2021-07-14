import Card from "../../CommonUI/Card"

import './ExpenseChart.css'
import ExpenseChartBar from "./ExpenseChartBar"

const NUM_MONTH = 12

const ExpenseChart = (props) => {
  const chartData = new Array(NUM_MONTH).fill(0)
  for(let expense of props.data) {
    const expenseMonth = new Date(expense.expenseDate).getMonth()
    chartData[expenseMonth] += Number(expense.expenseAmount)
  }
  const maxExpenseAmount = Math.max(...chartData);

  return (
    <Card>
      <div className="chart-wrapper">
        {chartData.map((dataPoint, index) => <ExpenseChartBar key={index} dataPoint={dataPoint} maxExpenseAmount={maxExpenseAmount} month={index}></ExpenseChartBar>)}
      </div>
    </Card>
  )
}

export default ExpenseChart;