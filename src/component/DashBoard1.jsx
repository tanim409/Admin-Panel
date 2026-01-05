import { Settings } from "lucide-react";
import { BadgeInfo as Help } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Send as Email } from "lucide-react";
import { ChartLine as Analysis } from "lucide-react";
import { BanknoteArrowDown as Expenses } from "lucide-react";
import { Handbag as Order } from "lucide-react";
import { BadgeDollarSign as Market } from "lucide-react";
import { Link } from "react-router-dom";
import { LayoutDashboard as DashBoard } from "lucide-react";
import "./DashBoard1.css";
import Home from "./Home/Home";
export default function DashBoard1() {
  return (
    <>
      <div >
        <div className="dashboard1">
          <div className="inner-dash">
            <div className="icon-text">
              <DashBoard />
              <Link to="/">Dashboard</Link>
            </div>
            <p>MANAGEMENT SYSTEM</p>
            <div className="icon-text">
              <User />
              <Link to="/user">User</Link>
            </div>
            <div className="icon-text">
              <ShoppingCart />
              <Link to="/products">Products</Link>
            </div>
            <div className="icon-text">
              <Order />
              <Link to="/order">Orders</Link>
            </div>
            <div className="icon-text">
              <Market />
              <Link to="/market">Markets</Link>
            </div>
            <div className="icon-text">
              <Expenses />
              <Link to="Expense">Expenses</Link>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
