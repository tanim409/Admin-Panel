import { UserData } from "../Data";
import { useState } from "react";
import BarChart from "./BarChart";

export default function BarChartInfo() {
  const [userData, setUserData] = useState({
    labels: [2020,2021,2022,2023,2024,2025],
    datasets: [
      {
        label: "User From Asia",
        data: UserData.map((Data) => Data.userGain),
        borderColor : "rgb(150, 133, 39)",
        backgroundColor:[
          'rgba(192, 148, 159, 0.6)',
          'rgba(115, 129, 7, 0.6)',
          'rgba(141, 94, 235, 0.6)',
          'rgba(104, 114, 17, 0.6)',
          'rgba(163, 38, 65, 0.6)',
          'rgba(48, 2, 49, 0.6)',
        ]
      },
      {
        label: "User From Asia",
        data:[65000,70000,32000,80991,83000,56777],
        borderColor : "rgb(150, 133, 39)",
        backgroundColor:[
          'rgba(150, 3, 39, 0.6)',
          'rgba(12, 10, 170, 0.6)',
          'rgba(73, 77, 72, 0.6)',
          'rgba(27, 4, 56, 0.9)',
          'rgba(207, 32, 32, 0.6)',
          'rgba(17, 184, 206, 0.6)',
        ]
      },
    ],
  });
  return (
    <div>
      <BarChart chartData={userData} />
    </div>
  );
}
