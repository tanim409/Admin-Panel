import "../../Styles/pieChart.css";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement,
  plugins,
} from "chart.js";

ChartJs.register(CategoryScale,Tooltip, Legend, ArcElement);

export default function pieChart({ chartData }) {
      const options = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                display: true,
                position: 'right',
                labels: {
                  font: { size: 13, weight: "bold" },
                  padding: 25,
                  usePointStyle: true,
                },
                align: 'center',
              },
              title: {
                display: false,
              },
            }
          };
  return <Pie data={chartData} options={options} className="pie-container" />;
}
