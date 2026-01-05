import {ExpenseData} from "./ExpenseData";
import { useState } from "react";
import ExpenseLineChart from "./ExpenseLineChart";
import "./ExpenseLineChart.css";

export default function ExpenseLineChartInfo() {
  
    const userData = {
        labels: ExpenseData.map((data)=>data.month),
        datasets: [
          {
            label: "Users Gained",
            data:ExpenseData.map((data)=>data.expense),
            borderColor: 'rgb(99, 102, 241)',
            backgroundColor: 'rgba(99, 102, 241, 0.4)',
            fill: true,
            tension: 0.4,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: 'rgb(99, 102, 241)',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
         },
        ],
      };
     return (
    <div className="line-chart-info">
     <ExpenseLineChart chartData={userData} />
    </div>
  );
}
