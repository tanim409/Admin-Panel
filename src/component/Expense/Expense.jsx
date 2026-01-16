import ExpenseAnalysis from "./ExpenseAnalysis"
import ExpenseCard from "./ExpenseCard"
import ExpenseSearch from "./ExpenseSearch"
import ExpenseTable from "./ExpenseTable"
import { useState } from "react"
export default function Expense(){
        const [search,setSearch] = useState("");
        const [category,setCategory] = useState('All');
        const [status,setStatus] = useState('All');
        const [fromDate,setFromDate] = useState("");
        const [toDate,setToDate] = useState("");

       
    return<>
        <div>
           <ExpenseCard/>
           <ExpenseSearch
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
           <ExpenseAnalysis/>
           <ExpenseTable
            search={search}
            category={category}
            status={status}
            fromDate={fromDate}
            toDate={toDate}
           />
        </div>
    </>
}