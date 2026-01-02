import "../../Styles/barChart.css";
import {Bar} from "react-chartjs-2"
import { Chart as ChartJs,
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
 } from "chart.js";

 ChartJs.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
 );

export default function pieChart({chartData}) {
       const options = {
             responsive: true,
             maintainAspectRatio: false, 
       };
       return <Bar data ={chartData} options={options} className="bar-container"/>
  
}
