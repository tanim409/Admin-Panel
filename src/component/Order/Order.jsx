import Card from "./Card";
import Search from "./Search";
import OrderChart from "./OrderChart";
import "./Order.css";
import OrderAnalysis from "./OrderAnalysis";
import Table from "./Table";
import { useState } from "react";
export default function Order(){
       const [search,setSearch] = useState("");
       const [payment,setPayment] = useState('All');
       const [status,setStatus] = useState('All');
       const [fromDate,setFromDate] = useState("");
       const [toDate,setToDate] = useState("");
     

    return(
      <>
       <Card/>
       <Search
        search={search}
        setSearch={setSearch}
        payment={payment}
        setPayment={setPayment}
        status={status}
        setStatus={setStatus}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}

       />
       <Table 
        search={search}
        payment={payment}
        status={status}
        fromDate={fromDate}
        toDate={toDate}
       />
       <OrderChart/>
       <OrderAnalysis/>
       
      </>
  );
}