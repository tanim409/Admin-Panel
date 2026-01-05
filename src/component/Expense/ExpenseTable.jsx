import "./ExpenseTable.css";
import { ArrowDownUp } from "lucide-react";
import { database } from "./ExpenseData.jsx";
import { Eye, Trash } from "lucide-react";
export default function ExpenseTable() {
  return (
    <>
      <div className="ExpenseTable-container">
        <table className="ExpenseOrderTable">
          <thead>
            <tr>
              <th className="exp-id">Id</th>
              <th className="vendor"> vendor </th>
              <th className="customer-name">Description</th>

              {/* <th>commission</th> */}
              <th className="total">
                Amount
                <ArrowDownUp className="arrow" />
              </th>
              <th className="status"> status</th>
              <th className="orderPayment"> category </th>
              <th className="orderDate">Join Date </th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {database.map((item, index) => (
              <tr>
                <td>
                  <div className="item-id">{item.Id}</div>
                </td>
                <td>
                  <div className="order-id">{item.vendor}</div>
                </td>
                <td className="customer">
                  <div className="customer-info">
                    <div className="ExpenseItem-customer">
                      {item.customer} {item.category}{" "}
                    </div>
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
