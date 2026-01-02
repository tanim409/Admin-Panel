import "./OrderAnalysis.css";
import { topProductData, recentActivityData } from "./OrderData";
export default function OrderAnalysis() {
  return (
    <div className="table-container">
      <div className="first-table">
        <div className="top-products">
          <div className="table-title">🏆 Top Products</div>
          {topProductData.map((item, index) => (
            <div className="product-item" key={index}>
              <div className="index">#{index + 1}</div>
              <div className="product-details">
                <div className="product-name">{item.productName}</div>
                <div className="product-stats">
                  <div className="product-sales">{item.quantity} Sold.</div>
                  <div>${item.revenue} revenue</div>
                </div>
              </div>
              <div className="product-revenue">${item.revenue}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="second-table">
        <div className="recent-activities">
          <div className="SecondTable-title">🕒 Recent Activities </div>
          {recentActivityData.map((activity, index) => (
            <div className="activity-item" key={index}>
              <div className="activity-icon">{activity.icon}</div>
              <div className="activity-details">
                <div className="activity-description">
                  Order
                  <span className="text-span">
                    {activity.id.toLowerCase()}
                  </span>
                  {activity.activity}
                </div>
                <div className="activity-meta">
                  <div
                    className={`status status-${activity.status.toLowerCase()}`}>
                    {activity.status}
                  </div>
                  <div className="time">{activity.time}</div>
                </div>
              </div>
              <div className="activity-payment">{activity.payment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
