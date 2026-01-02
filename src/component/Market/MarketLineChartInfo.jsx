import MarketLineChart from "./MarketLineChart";
import { monthlyTrend } from "./MarketData";
import "./MarketLineChart.css";
export default function MarketLineChartInfo() {
  
    const userData = {
        labels: monthlyTrend.map((data) => data.month),
        datasets: [
          {
            label: "Users Gained",
            data: monthlyTrend.map((data) => data.sales),
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
     <MarketLineChart chartData={userData} />
    </div>
  );
}
