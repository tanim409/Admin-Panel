import "./Table.css";
import { ArrowDownUp, X } from "lucide-react";
import { database } from "./OrderData.jsx";
import { Eye, Trash, ArrowUp, ArrowDown} from "lucide-react";
import { useState } from "react";

export default function Table({ search, payment, status, fromDate, toDate }) {
  const [data_base, setDataBase] = useState(database);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState();
  const handleData = (Id) => {
    if (window.confirm(`Are you sure you want to delete order ${Id}?`)) {
      setDataBase(data_base.filter((order) => order.orderId != Id));
    }
  };

  const filterdProducts = data_base.filter((p) => {
    const matchSearch =
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase());

    const matchStatus = status === "All" || p.status === status;
    const matchPayment = payment === "All" || p.payment === payment;

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
    return matchSearch && matchStatus && matchPayment && matchDate;
  });

  const sortProducts = [...filterdProducts].sort((a, b) => {
    let count = 0;

    if (sortBy === "products") {
      count = a.products - b.products;
    }
    if (sortBy === "total") {
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
  return (
    <>
      <div className="OrderTable-container">
        <table className="order-table">
          <thead>
            <tr>
              <th className="orderId">Order Id </th>
              <th className="customer-name">Customer</th>
              <th className="product-name" onClick={()=>handleSort('products')}>
                Products
                {sortBy === "products" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>
              <th className="total" onClick={()=>handleSort('total')}>
                Total
                {sortBy === "total" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>
              <th className="status"> status</th>
              <th className="orderPayment"> payment </th>
              <th className="orderDate">Order Date </th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortProducts.map((item, index) => (
              <tr key={item.ID}>
                <td>
                  <div className="order-id">{item.orderId}</div>
                </td>
                <td className="customer">
                  <div className="customer-info">
                    <div className="item-customer">{item.customer} </div>
                    <div className="email">{item.email}</div>
                  </div>
                </td>
                <td className="products-badge">{item.products} items</td>
                <td>
                  <div className="total">${item.total}</div>
                </td>
                <td>
                  <span
                    className={`status status-${item.status.toLowerCase()}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <span
                    className={`payment payment-${item.payment.toLowerCase()}`}
                  >
                    {item.payment}
                  </span>
                </td>
                <td>
                  <div className="orderDate">{item.orderDate} </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-button edt"
                      title="view details"
                      onClick={() => {
                        setSelectedUser(item);
                        setShowModel(true);
                      }}
                    >
                      <Eye className="edt-btn" />
                    </button>
                    <button
                      className="trash-button delete"
                      onClick={() => handleData(item.orderId)}
                    >
                      <Trash className="edt-btn" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModel && selectedUser && (
        <div className="model-overlay" onClick={() => setShowModel(false)}>
          <div className="model-container" onClick={(e) => e.stopPropagation()}>
            <div className="model-header">
              <h2 className="modal-title">Order Details</h2>
              <button className="close-btn" onClick={() => setShowModel(false)}>
                <X style={{ width: "1.5", height: "1.5" }} />
              </button>
            </div>
            <div className="modal-body">
              <div className="user-detail-grid">
                <div className="detail-row">
                  <span className="detail-label">Order Id</span>
                  <span className="detail-value">{selectedUser.orderId}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Customer</span>
                  <span className="detail-value">{selectedUser.customer}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{selectedUser.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">products</span>
                  <span className="detail-value">{selectedUser.products}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Expense</span>
                  <span className="detail-value">{selectedUser.total}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Order Status</span>
                  <span className="detail-value">{selectedUser.status}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">payment</span>
                  <span className="detail-value">{selectedUser.payment}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Order Date</span>
                  <span className="detail-value">{selectedUser.orderDate}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Total Spent</span>
                  <span className="detail-value">{selectedUser.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
