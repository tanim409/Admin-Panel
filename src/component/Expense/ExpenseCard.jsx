import "./ExpenseCard.css";
import {
  BadgeDollarSign,
  CircleDollarSign,
  Award,
  Hourglass,
  SquareCheckBig,
} from "lucide-react";

export default function ExpenseCard() {
  return (
    <>
      <div className="Expense-header">
        <div className="header">
          <p className="first-p">Expense Management</p>
          <p className="second-p">Expense tracking and analytics dashboard</p>
        </div>
      </div>

      <div className="ExpenseCardContainer">
        <div className="pc">
          <div className="icon-product">
            <BadgeDollarSign/>
           
          </div>
          <p className="product">Total Expenses</p>
          <div className="text">
            <p>$133,095.00</p>
          </div>
        </div>
        <div className="pc">
          <div className="icon-revenue">
            <CircleDollarSign />
          </div>
          <p className="product">Monthly Trend</p>
          <div className="text">
            <p>0.0%</p>
          </div>
        </div>
        <div className="pc">
          <div className="icon-pending">
            <Award  />
          </div>
          <p className="pro">Top Category</p>
          <div className="text">
            <p>Marketing</p>
          </div>
        </div>
      </div>
    </>
  );
}
