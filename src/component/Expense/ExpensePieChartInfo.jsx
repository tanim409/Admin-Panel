import {CategoryData} from "./ExpenseData";
import { useState } from "react";
import ExpensePieChart from "./ExpensePieChart";
import "./ExpensePieChart.css";
export default function ExpensePieChartInfo() {
  const [userData, setUserData] = useState({
    labels:CategoryData.map((data)=>data.category),
    datasets: [
      {
        label: "Expenses Over Month",
        data: CategoryData.map((data) => data.expense),
        backgroundColor: [
          'rgba(245, 158, 11, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
          'rgb(245, 158, 11)',
          'rgb(59, 130, 246)',
          'rgb(139, 92, 246)',
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)'
      ],
        borderWidth: 2,
      },
    ],
  });

  return (
  <div className="pie-chart-info">
    <ExpensePieChart chartData={userData} />  
  </div>
  );
}
