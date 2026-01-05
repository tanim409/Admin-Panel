import "./ExpenseAnalysis.css";
import ExpensePieChartInfo from "./ExpensePieChartInfo";
import ExpenseLineChartInfo from "./ExpenseLineChartInfo";
export default function ExpenseAnalysis() {
  return (
    <div className="ExpenseChartContainer">
     <div className="pie-chart">
      <p>Expense By Category</p>
       <ExpensePieChartInfo/>
     </div>
     <div className="line-chart">
      <p>Monthly Expense Trend</p>
        <ExpenseLineChartInfo/>
     </div>
    </div>
  );
}