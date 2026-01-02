import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement,
  plugins,
} from "chart.js";
import "./OrderPieChart.css";
import { Pilcrow } from "lucide-react";
ChartJs.register(CategoryScale, Tooltip, Legend, ArcElement);

export default function OrderPieChart({ chartData }) {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins:{
      legend:{
        position: 'bottom',
        labels:{
          usePointStyle: true,
          pointStyle: 'circle',
        }
      },
    }
  };
  return <Doughnut data={chartData} options={options} className="pie-container" />;
}
