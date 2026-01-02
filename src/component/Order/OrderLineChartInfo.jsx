import {UserData} from "./OrderData";
import { useState } from "react";
import OrderLineChart from "./OrderLineChart";
import "./OrderLineChart.css";

export default function OrderLineChartInfo() {
  
    const userData = {
        labels: ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030"],
        datasets: [
          {
            label: "Users Gained",
            data:[ 80000,70000,78888,60000,63000,53000,62000,61000,59000,58000,57000],
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
     <OrderLineChart chartData={userData} />
    </div>
  );
}
