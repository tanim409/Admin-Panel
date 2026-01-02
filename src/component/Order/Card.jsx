import {
  Package,
  CircleDollarSign,
  Hourglass,
  SquareCheckBig,
} from "lucide-react";
import "./Card.css";
export default function Card() {
  return (
    <>
    <div className="header">
        <p className="first-p">Order Management</p>
        <p className="second-p">Order tracking and analytics dashboard</p>
      </div>
      <div className="order-container">
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
    </>
  );
}
