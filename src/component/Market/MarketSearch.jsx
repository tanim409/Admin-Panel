import { Search, ChevronDown, Download } from "lucide-react";
import "./MarketSearch.css";
import { database } from "./MarketData.jsx";
import { useState } from "react";
export default function MarketSearch({
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

  const exportToCSV = () => {
    const headers = [
      "Vendor",
      "owner",
      "products",
      "commission",
      "Status",
      "category",
      "orderDate",
    ];
    const rows = filterdProducts.map((u) => [
      u.vendor,
      u.customer,
      u.products,
      u.commission,
      u.status,
      u.category,
      u.orderDate,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Market Data";
    a.click();
  };

  return (
    <>
      <div className="MarketSearchContainer">
        <div className="MarketSearchInnerContainer">
          <Search className="SearchIcon" />
          <input
            type="text"
            placeholder="Search By Name..."
            className="MarketSearch"
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
              <div>From Date </div>
            </div>
            <input
              type="date"
              placeholder="mm/dd/yy"
              className="MarketPlaceHolder"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="join-date-to">
            <div className="to-date-text">To Date</div>
            <input
              type="date"
              placeholder="mm/dd/yy "
              className="MarketPlaceHolder"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
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
