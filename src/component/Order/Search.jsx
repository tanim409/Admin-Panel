import "./Search.css";
import {
  Users,
  UserCheck,
  Activity,
  Search as SEARCH,
  Download,
  ChevronDown,
  ArrowDownUp,
  Edit,
  MessageCircle,
  Ban,
  Trash,
  MapPin,
  Clock,
  DollarSign,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";
import { database } from "./OrderData.jsx";

export default function Search({
  search,
  setSearch,
  payment,
  setPayment,
  status,
  setStatus,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) {
  const [data_base, setDataBase] = useState(database);
  const exportToCSV = () => {
    const headers = [
      "orderId",
      "Customer",
      "products",
      "Total",
      "Status",
      "category",
      "orderDate",
    ];
    const rows = data_base.map((u) => [
      u.orderId,
      u.customer,
      u.products,
      u.total,
      u.status,
      u.category,
      u.orderDate,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Order Data";
    a.click();
  };

  return (
    <>
      <div className="search-Container">
        <div className="search-header">
          <div className="search-text">
            <p>Filters & Search</p>
          </div>
          <div className="buttons">
            <button
              className="button2"
              onClick={() => {
                setSearch(""),
                  setStatus("All"),
                  setPayment("All"),
                  setFromDate(""),
                  setToDate("");
              }}
            >
              <div className="all">
                <Trash className="trash" />
                Clear All
              </div>
            </button>
            <button className="button3" onClick={exportToCSV}>
              <div className="all-button">
                <Download className="download" />
                Export
              </div>
            </button>
          </div>
        </div>
        <div className="input-section">
          <input
            type="text"
            placeholder="Search User By Name..."
            className="input-container"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="status-section">
          <div className="orderStatus-container">
            <p>Order Status</p>
            <div className="status-button">
              <button className="allOrders" onClick={() => setStatus("All")}>
                All orders
              </button>
              <button
                className="processing"
                onClick={() => setStatus("processing")}
              >
                Processing
              </button>
              <button className="pending" onClick={(e) => setStatus("pending")}>
                Pending
              </button>
              <button className="shipped" onClick={(e) => setStatus("shipped")}>
                Shipped
              </button>
              <button
                className="delivered"
                onClick={(e) => setStatus("delivered")}
              >
                Delivered
              </button>
            </div>
          </div>

          <div className="paymentStatus-container">
            <p>Payment Status</p>
            <div className="status-button">
              <button className="payment" onClick={() => setPayment("All")}>
                All payment{" "}
              </button>
              <button className="paid" onClick={() => setPayment("paid")}>
                Paid
              </button>
              <button className="pending" onClick={() => setPayment("pending")}>
                Pending
              </button>
              <button className="failed" onClick={() => setPayment("failed")}>
                Failed
              </button>
              <button className="refund" onClick={() => setPayment("refunded")}>
                Refunded
              </button>
            </div>
          </div>
        </div>

        <div className="date-section">
          <div className="from-date">
            <p>From Date </p>
            <input
              type="date"
              placeholder="mm/dd/yy"
              className="placeholderInfo"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="to-date">
            <p>To Date</p>
            <input
              type="date"
              placeholder="mm/dd/yy"
              className="placeholderInfo"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
