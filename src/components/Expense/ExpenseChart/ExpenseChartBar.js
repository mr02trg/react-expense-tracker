import { getMonthString } from "../../../utils/Utils"

const ExpenseChartBar = (props) => {
  return (
    <div  className="chart-bar-container">
      <div className="chart-bar">
        <div className="chart-bar-filled" style={{height: `${props.dataPoint ? Math.round(props.dataPoint/props.maxExpenseAmount* 100) : 0}%`}}></div>
      </div>
      <div>{getMonthString(props.month)}</div>
    </div>
  )
}

export default ExpenseChartBar;