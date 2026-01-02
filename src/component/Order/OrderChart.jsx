import "./OrderChart.css";
import OrderLineChart from "./OrderLineChart";
import OrderLineChartInfo from "./OrderLineChartInfo";
import OrderPieChartInfo from "./OrderPieChartInfo";
export default function OrderChart() {
  return (
    <div className="chart_container">
     <div className="pie-chart">
      <p>📊 Order Status Distribution</p>
       <OrderPieChartInfo/>
     </div>
     <div className="line-chart">
      <p>📈 Revenue Trend (Last 30 Days)</p>
        <OrderLineChartInfo/>
     </div>
    </div>
  );
}