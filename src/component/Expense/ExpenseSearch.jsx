import { Search, ChevronDown, Download } from "lucide-react";
import "./ExpenseSearch.css";
import { useState } from "react";
import { database } from "./ExpenseData.jsx";
export default function ExpenseSearch({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) {
  const [data_base, setDataBase] = useState(database);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState();
  const filterdProducts = data_base.filter((p) => {
    const matchSearch = p.vendor.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "All" || p.status === status;
    const matchCategory = category === "All" || p.category === category;

    let matchDate = true;

    if (fromDate || toDate) {
      const orderDate = new Date(p.orderDate);

      if (fromDate) {
        const from = new Date(fromDate);
        matchDate = matchDate && orderDate >= from;
      }

      if (toDate) {
        const to = new Date(toDate);
        matchDate = matchDate && orderDate <= to;
      }
    }

    return matchSearch && matchStatus && matchCategory && matchDate;
  });

  const sortProducts = [...filterdProducts].sort((a, b) => {
    let count = 0;

    if (sortBy === "amount") {
      count = a.total - b.total;
    }

    return sortOrder === "asc" ? count : -count;
  });

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("desc");
    }
  };
  const exportToCSV = () => {
    const headers = [
      "Id",
      "Vendor",
      "Description",
      "amount",
      "Status",
      "category",
      "Expense Date",
    ];
    const rows = sortProducts.map((u) => [
      u.Id,
      u.vendor,
      u.customer,
      u.total,
      u.status,
      u.category,
      u.orderDate
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Expense Data";
    a.click();
    /*
    **The complete flow:**
    1. CSV text → 2. Convert to Blob → 3. Create download URL → 4. Create fake link → 5. Set download name → 6. Auto-click to download
    
    **Visual analogy:**
    ```
    CSV data (text)
          ↓
    Package it (Blob)
          ↓
    Give it an address (URL)
          ↓
    Create a download button (anchor)
          ↓
    Name the file (download attribute)
          ↓
    Press the button automatically (click)
          ↓
    File downloads! 📥
    */

  };
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Books">Books</option>
              <option value="Beauty">Beauty</option>
              <option value="Software">Software</option>
              <option value="Toys">Toys</option>
              <option value="Home & Garden">Home & Garden</option>
              <option value="Sports">Sports</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
          <div className="selectContainer">
            <ChevronDown className="select-icon" />
            <select
              className="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="All">Status</option>
              <option value="Suspended">Suspended</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="join-date-from">
            <div className="join-date-text">
              <div>From Date </div>
            </div>
            <input
              type="date"
              placeholder="yyyy/mm/dd"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="ExpensePlaceHolder"
            />
          </div>
          <div className="join-date-to">
            <div className="to-date-text">To Date</div>
            <input
              type="date"
              placeholder="mm/dd/yy"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="ExpensePlaceHolder"
            />
          </div>

          <button className="button" onClick={exportToCSV}>
            <Download className="btn-icon" />
            Export CSV
          </button>
        </div>
      </div>
    </>
  );
}
