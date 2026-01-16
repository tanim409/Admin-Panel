import "./MarketTable.css";
import { ArrowDownUp, X, ArrowUp, ArrowDown } from "lucide-react";
import { database } from "./MarketData.jsx";
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
export default function MarketTable({
  search,
  category,
  status,
  fromDate,
  toDate,
}) {
  const [data_base, setDataBase] = useState(database);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState();

  const handleData = (vendor) => {
    if (window.confirm(`Are you sure you want to delete ?`)) {
      setDataBase(data_base.filter((order) => order.vendor != vendor));
    }
  };

  const filterdProducts = data_base.filter((p) => {
    const matchSearch =
      p.customer.toLowerCase().includes(search.toLowerCase()) ||
      p.vendor.toLowerCase().includes(search.toLowerCase());

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

    if (sortBy === "products") {
      count = a.products - b.products;
    }
    if (sortBy === "total") {
      count = a.total - b.total;
    }
    if (sortBy === "commission") {
      count = a.commission - b.commission;
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
        <table className="vendorOrderTable">
          <thead>
            <tr>
              <th className="vendor"> Vendor </th>
              <th className="customer-name">Owner</th>
              <th className="product-name"  onClick={()=>handleSort('products')}>
                Products
                {sortBy === "products" ? (
                  sortOrder === "asc" ? (
                    <ArrowUp className="arrow" />
                  ) : (
                    <ArrowDown className="arrow" />
                  )
                ) : (
                  <ArrowDownUp className="arrow" />
                )}
              </th>
              <th className="product-name"  onClick={()=>handleSort('commission')}>
                Commission
                {sortBy === "commission" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>

              <th className="total" onClick={()=>handleSort('total')}>
                Total sales
                {sortBy === "total" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>
              <th className="status"> status</th>
              <th className="orderPayment"> category </th>
              <th className="orderDate">join Date </th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortProducts.map((item, index) => (
              <tr key={item.Id}>
                <td>
                  <div className="order-id">{item.vendor}</div>
                </td>
                <td className="customer">
                  <div className="customer-info">
                    <div className="item-customer">{item.customer} </div>
                    <div className="email">{item.email}</div>
                  </div>
                </td>
                <td className="products-badge">{item.products} items</td>
                <td>
                  <div className="total">${item.commission}</div>
                </td>
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
                    className={`payment payment-${item.category.toLowerCase()}`}
                  >
                    {item.category}
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
                      onClick={() => handleData(item.vendor)}
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
              <h2 className="modal-title">Expense Details</h2>
              <button className="close-btn" onClick={() => setShowModel(false)}>
                <X style={{ width: "1.5", height: "1.5" }} />
              </button>
            </div>
            <div className="modal-body">
              <div className="user-detail-grid">
                <div className="detail-row">
                  <span className="detail-label">Owner</span>
                  <span className="detail-value">{selectedUser.customer}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">{selectedUser.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Vendor</span>
                  <span className="detail-value">{selectedUser.vendor}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Category</span>
                  <span className="detail-value">{selectedUser.category}</span>
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
                  <span className="detail-label">Commission</span>
                  <span className="detail-value">
                    {selectedUser.commission}
                  </span>
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
