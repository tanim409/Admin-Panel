import { Search, ChevronDown, Download } from "lucide-react";
import "./ExpenseSearch.css";
export default function ExpenseSearch() {
  return (
    <>
      <div className="Expense-Filters">
        <div className="ExpenseFilterWrapper">Expense Filters</div>
      </div>
      <div className="ExpenseSearchContainer">
        <div className="ExpenseSearchInnerContainer">
          <Search className="SearchIcon" />
          <input
            type="text"
            placeholder="Search By Name..."
            className="ExpenseSearch"
          />
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select className="select">
              <option value="All Categories">All Categories</option>
              <option value="Admin">Electronics</option>
              <option value="Manager">Books</option>
              <option value="Customer">Beauty</option>
              <option value="Customer">Software</option>
              <option value="Customer">Toys</option>
              <option value="Customer">Home & Garden</option>
              <option value="Customer">Sports</option>
              <option value="Customer">Fashion</option>
            </select>
          </div>
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select className="select">
              <option value="All Status">This Month</option>
              <option value="Active">This quarter</option>
              <option value="InActive">This week</option>
              <option value="Banned">This Year</option>
            </select>
          </div>
        

          <div className="join-date-from">
            <div className="join-date-text">
              <div>From Date </div>
            </div>
            <input
              type="text"
              placeholder="mm/dd/yy"
              className="ExpensePlaceHolder"
            />
          </div>
          <div className="join-date-to">
            <div className="to-date-text">To Date</div>
            <input
              type="text"
              placeholder="mm/dd/yy "
              className="ExpensePlaceHolder"
            />
          </div>

          <button className="button">
            <Download className="btn-icon" />
            Export CSV
          </button>
        </div>
      </div>
    </>
  );
}
