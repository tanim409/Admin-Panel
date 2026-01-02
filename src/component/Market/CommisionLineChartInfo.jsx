import CommisionLineChart from "./CommisionLineChart";
import {commissionData} from "./MarketData";
import "./CommisionLineChart.css";
export default function CommisionLineChartInfo() {
  
    const userData = {
        labels: commissionData.map((data) => data.month),
        datasets: [
          {
            label: "Users Gained",
            data: commissionData.map((data) => data.commission),
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
    <div className="CommisionLineChart">
     <CommisionLineChart chartData={userData} />
    </div>
  );
}
