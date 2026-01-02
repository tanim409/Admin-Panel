import "./MarketCard.css";
import { DollarSign, Users, UserCheck, Activity } from "lucide-react";
export default function MarketCard() {
  return (
    <>
      <div className="header">
        <p className="fp">Market Analytics </p>
      </div>
      <div className="market-card-container">
        {/* first container  */}
        <div className="MarketContainer">
          {/* First Card */}
          <div className="pc">
            <div className="icon">
              <Users />
            </div>
            <p className="product">Total Sales</p>
            <div className="text">
              <p>6,000</p>
            </div>
          </div>

          {/* Second Card  */}
          <div className="pc">
            <div className="icon-trash">
              <UserCheck />
            </div>
            <p className="pro">New Customer</p>
            <div className="text">
              <p>6,000</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Avg Order Value</p>
            <div className="text">
              <p>$13.5</p>
            </div>
          </div>

          {/* fourth Card */}
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Convertion Rate</p>
            <div className="text">
              <p>13.5%</p>
            </div>
          </div>
        </div>

        {/* second container */}
        <div className="second-container">
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Total Vendor</p>
            <div className="text">
              <p>13.5%</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Commission Earned</p>
            <div className="text">
              <p>13.5%</p>
            </div>
          </div>
          <div className="pc">
            <div className="icon-alert">
              <Activity />
            </div>
            <p className="pro">Pending Approvals</p>
            <div className="text">
              <p>13.5%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
