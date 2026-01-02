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

export default function Search() {
  return (
    <>
      <div className="search-Container">
        <div className="search-header">
          <div className="search-text">
            <p>Filters & Search</p>
          </div>
          <div className="buttons">
            <button className="button1">
              <div className="all">
                <CalendarDays className="date" />
                Date Range
              </div>
            </button>
            <button className="button2">
              <div className="all">
                <Trash className="trash" />
                Clear All
              </div>
            </button>
            <button className="button3">
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
          />
        </div>
        <div className="status-section">
          <div className="orderStatus-container">
            <p>Order Status</p>
            <div className="status-button">
              <button className="allOrders">All orders</button>
              <button className="processing">Processing</button>
              <button className="pending">Pending</button>
              <button className="shipped">Shipped</button>
              <button className="delivered">Delivered</button>
            </div>
          </div>

          <div className="paymentStatus-container">
            <p>Payment Status</p>
            <div className="status-button">
              <button className="payment">All payment </button>
              <button className="paid">Paid</button>
              <button className="pending">Pending</button>
              <button className="failed">Failed</button>
              <button className="refund">Refunded</button>
            </div>
          </div>
        </div>

        <div className="date-section">
         <div className="from-date">
          <p>From Date </p>
          <input type="text" placeholder="mm/dd/yy" className="placeholderInfo"/>
         </div>
         <div className="to-date">
          <p>To Date</p>
          <input type="text" placeholder="mm/dd/yy"  className="placeholderInfo"/>
         </div>
        </div>

      </div>
    </>
  );
}
