import ExpenseAnalysis from "./ExpenseAnalysis"
import ExpenseCard from "./ExpenseCard"
import ExpenseSearch from "./ExpenseSearch"
import ExpenseTable from "./ExpenseTable"
export default function Expense(){
    return<>
        <div>
           <ExpenseCard/>
           <ExpenseSearch/>
           <ExpenseAnalysis/>
           <ExpenseTable/>
        </div>
    </>
}