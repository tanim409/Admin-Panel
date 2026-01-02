import { Search, ChevronDown, Download } from "lucide-react";
import "./MarketSearch.css";
export default function MarketSearch() {
  return (
    <>
      <div className="MarketSearchContainer">
        <div className="MarketSearchInnerContainer">
        <Search className="SearchIcon" />
        <input
          type="text"
          placeholder="Search By Name..."
          className="MarketSearch"
        />
        <div className="selectContainer">
          <ChevronDown className="select-icon" />
          <select className="select">
            <option value="All Roles">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Customer">Customer</option>
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
        <div className="selectContainer">
          <ChevronDown className="select-icon" />
          <select className="select">
            <option value="All Rating">All Ratings</option>
            <option value="4+ start">4+ star</option>
            <option value="3+ star">3+ star</option>
            <option value="2+ star">2+ star</option>
            <option value="1+ star">1+ star</option>
          </select>
        </div>

        <div className="join-date-from">
          <div className="join-date-text">
            <div >From Date </div>
          </div>
          <input
            type="text"
            placeholder="mm/dd/yy"
            className="MarketPlaceHolder"
          />
        </div>
        <div className="join-date-to">
          <div className="to-date-text">To Date</div>
          <input
            type="text"
            placeholder="mm/dd/yy "
            className="MarketPlaceHolder"
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
