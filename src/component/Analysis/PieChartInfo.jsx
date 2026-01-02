import { UserData } from "../Data";
import { useState } from "react";
import PieChart from "./PieChart";

export default function PieChartInfo() {
  const [userData, setUserData] = useState({
    labels: ['2020','2021','2022','2023','2024','2025'],
    datasets: [
      {
        label: "User From Asia",
        data: UserData.map((Data) => Data.userGain),
        borderColor : "rgb(150, 133, 39)",
        backgroundColor:[
          'rgba(194, 22, 65, 0.6)',
          'rgba(246, 247, 230, 0.6)',
          'rgba(75, 46, 133, 0.6)',
          'rgba(226, 245, 58, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(157, 23, 161, 0.6)',
        ]
      },
    ],
  });
  return (
    <div>
      <PieChart chartData={userData} />
    </div>
  );
}