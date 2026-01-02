import "./MarketTable.css";
import { ArrowDownUp } from "lucide-react";
import { database } from "./MarketData.jsx";
import { Eye, Trash } from "lucide-react";
export default function MarketTable() {
  return (
    <>
      <div className="OrderTable-container">
        <table className="vendorOrderTable">
          <thead>
            <tr>
              <th className="vendor"> Vendor </th>
              <th className="customer-name">Owner</th>
              <th className="product-name">Products</th>
              <th className="product-name">Commission</th>
              {/* <th>commission</th> */}
              <th className="total">
                Total sales
                <ArrowDownUp className="arrow" />
              </th>
              <th className="status"> status</th>
              <th className="orderPayment"> category </th>
              <th className="orderDate">join Date </th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {database.map((item, index) => (
              <tr>
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
                    <div className="total">
                       {item.commission}
                    </div>
                </td>
                <td>
                  <div className="total">{item.total}</div>
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
                    <button className="edit-button edt">
                      <Eye className="edt-btn" />
                    </button>
                    <button className="trash-button delete">
                      <Trash className="edt-btn" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
