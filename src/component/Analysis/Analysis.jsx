import "../../Styles/Analysis.css";

import { ShoppingBasket } from "lucide-react";
import BarChartInfo from "./BarChartInfo";
import PieChartInfo from "./PieChartInfo";
import UserAnalysis from "./User/UserAnalysis";
import  '../../Styles/Analysis.css';
export default function Analysis() {
  return (
    <div> 
      <UserAnalysis/>
       <div className="charts">
        <div className="pie-chart">
          <PieChartInfo />
        </div>
        <div>
          <BarChartInfo />
        </div>
      </div>
      
    </div>
  );
}
