import {UserData} from "./OrderData";
import { useState } from "react";
import OrderPieChart from "./OrderPieChart";
import "./OrderPieChart.css";
export default function OrderPieChartInfo() {
  const [userData, setUserData] = useState({
    labels:["Pending","Processing","Shipped","Delivered","Cancelled"],
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
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
    <OrderPieChart chartData={userData} />  
  </div>
  );
}
