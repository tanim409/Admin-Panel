import "./HomeCard.css";
import {
  ChartLine,
  ShoppingCart,
  UserStar,
  Bell,
  Package,
  CircleDollarSign,
  Hourglass,
  SquareCheckBig,
} from "lucide-react";
import {
  recentActivityData,
  systemAlertData,
  VendorData,
  topProductData,
} from "./HomeData";

import ProgressCircle from "./PercentageCircle";
// import { topProductData, recentActivityData } from "../Order/OrderData";
export default function HomeCard() {
  const profitMargin = [
    {
      TotalRevenue: "$1500000",
      TotalExpense: "$3200000",
      NetProfit: "$-1700000",
    },
  ];

  return (
    <>
      <div className="containerWrapper">
        <div className="HomeContainer">
          <div className="pc">
            <div className="icon-product">
              <Package />
            </div>
            <p className="product">Total Orders</p>
            <div className="text">
              <p>150</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-revenue">
              <CircleDollarSign />
            </div>
            <p className="product">Total Revenue</p>
            <div className="text">
              <p>$96,403.57</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-pending">
              <Hourglass />
            </div>
            <p className="pro">Pending Orders</p>
            <div className="text">
              <p>56</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-complete">
              <SquareCheckBig />
            </div>
            <p className="pro">Completion Rate</p>
            <div className="text">
              <p>19.3%</p>
            </div>
          </div>
        </div>

        <div className="ActivityContainer">
          <div className="recent-activity">
            <p>Recent Activity</p>
          </div>

          <div className="recent-activity-data">
            {recentActivityData.map((activity, index) => (
              <div className="recent-activity-item" key={index}>
                <div
                  className={`activityIcon activityIcon-${activity.chartIcon}`}
                >
                  {activity.chartIcon}
                </div>
                <div className="activityDetails">
                  <div className="activityDescription">
                    <span className="text-span">{activity.title}</span>
                    <div>{activity.description} </div>
                    <div> {activity.date} </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="AlertContainer">
          <div className="recent-activity">
            <div className="AlertIcon">
              <Bell />
            </div>
            <p>System Alerts</p>
          </div>

          <div className="recent-activity-data">
            {systemAlertData.map((activity, index) => (
              <div className="recent-activity-item" key={index}>
                <div className="activityDescription">
                  <span className="text-span">{activity.title}</span>
                  <div>{activity.description} </div>
                  <div> {activity.time} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="profit-margin-container">
        <div className="profitMarginHeader">
          <p>Profit Margin</p>
        </div>
        <div className="profitMarginData">
          <div className="profit-circle">
            <ProgressCircle percentage={90}/>
          </div>
          <div className="profit-data-wrapper">
            <div className="DataContainer">
              <div className="data-content-wrapper">
                <div>Total Revenue</div>
                <div className="revenue-text"  style={{color: '#34d399'}}>$1500000</div>
              </div>
            </div>
            <div className="DataContainer">
            <div className="data-content-wrapper">
                <div>Total Expense</div>
                <div className="revenue-text" style={{color: '#fbbf24'}}>$3200000</div>
             </div>
            </div>
            <div className="DataContainer">
            <div className="data-content-wrapper">
                <div>Net Profit</div>
                <div className="revenue-text" style={{color: '#f87171'}}>- $1700000</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vendor-expense-container">
        <div className="HomeVendorContainer">
          {/*Content Section*/}
          <div className="vendor-container-header">
            Top 10 Vendors By Revenue
            <div className="vendor-text"> Total revenue</div>
          </div>

          <div className="vendor-revenue-content">
            <div className="VendorSalesWrapper">
              {VendorData.map((vendorData, index) => (
                <div key={index} className="vendor-revenue-data">
                  <div className="index-vendor">
                    <div className="vendor-product">
                      <p className="vendor-products">
                        {" "}
                        {vendorData.vendorName}
                      </p>
                      <div className="product-sold">
                        {" "}
                        {vendorData.productsSold} items
                      </div>
                    </div>
                  </div>
                  <div className="revenue-text">{vendorData.totalSales}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* second container*/}
        <div className="HomeExpenseContainer">
          <div className="vendor-container-header">
            Expense BreakDown
            <div className="vendor-text"> Total Expense By Category</div>
          </div>

          <div className="expense-breakdown">
            {topProductData.map((item, index) => (
              <div className="expense-item" key={index}>
                <div className="index">#{index + 1}</div>
                <div className="product-details">
                  <div className="product-name">{item.ExpenseName}</div>
                  <div className="product-stats">
                    <div className="product-sales">
                      {item.quantity} expense.
                    </div>
                  </div>
                </div>
                <div className="product-revenue">${item.Expense}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
