import MarketCard from "./MarketCard";
import MarketSearch from "./MarketSearch";
import MarketAnalysis from "./MarketAnalysis";
import MarketTable from "./MarketTable";
import { useState } from "react";
export default function Market() {

  const [search,setSearch] = useState("");
  const [category,setCategory] = useState('All');
  const [status,setStatus] = useState('All');
  const [fromDate,setFromDate] = useState("");
  const [toDate,setToDate] = useState("");

  return (
    <>
      <div>
        <MarketCard />
        <MarketSearch 
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        status={status}
        setStatus={setStatus}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
        />
         <MarketTable 
         search={search}
         category={category}
         status={status}
         fromDate={fromDate}
         toDate={toDate}
        />
        <MarketAnalysis />
       
      </div>
    </>
  );
}
