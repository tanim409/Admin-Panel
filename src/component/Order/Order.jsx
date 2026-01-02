import Card from "./Card";
import Search from "./Search";
import OrderChart from "./OrderChart";
import "./Order.css";
import OrderAnalysis from "./OrderAnalysis";
import Table from "./Table";
export default function Order(){
    return(
      <>
       <Card/>
       <Search/>
       <OrderChart/>
       <OrderAnalysis/>
       <Table/>
      </>
  );
}