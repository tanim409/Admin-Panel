import "../../Styles/product.css";
import {
  Package,
  Search,
  PackageCheck,
  TriangleAlert,
  Trash,
  ChevronDown,
  ArrowDownUp,
  
} from "lucide-react";
export default function Product() {
  const database = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      category: "Electronics",
      sales: 1250,
      revenue: 124500,
      stock: 45,
      trend: "+15%",
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      category: "Electronics",
      sales: 980,
      revenue: 196000,
      stock: 23,
      trend: "+22%",
    },
    {
      id: 3,
      name: "Laptop Stand Aluminum",
      category: "Accessories",
      sales: 756,
      revenue: 37800,
      stock: 120,
      trend: "+8%",
    },
    {
      id: 4,
      name: "USB-C Hub 7-in-1",
      category: "Accessories",
      sales: 654,
      revenue: 32700,
      stock: 5,
      trend: "-3%",
    },
    {
      id: 5,
      name: "Gaming Mouse RGB",
      category: "Electronics",
      sales: 543,
      revenue: 27150,
      stock: 89,
      trend: "+12%",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      category: "Electronics",
      sales: 432,
      revenue: 64800,
      stock: 34,
      trend: "+5%",
    },
    {
      id: 7,
      name: "Phone Case Premium",
      category: "Accessories",
      sales: 398,
      revenue: 11940,
      stock: 2,
      trend: "-8%",
    },
    {
      id: 8,
      name: "Bluetooth Speaker",
      category: "Electronics",
      sales: 387,
      revenue: 38700,
      stock: 67,
      trend: "+18%",
    },
    {
      id: 9,
      name: "Webcam HD 1080p",
      category: "Electronics",
      sales: 321,
      revenue: 28890,
      stock: 45,
      trend: "+10%",
    },
    {
      id: 10,
      name: "Monitor Stand Wood",
      category: "Accessories",
      sales: 298,
      revenue: 17880,
      stock: 78,
      trend: "+6%",
    },
    {
      id: 11,
      name: "Wireless Headphones Pro",
      category: "Electronics",
      sales: 1250,
      revenue: 124500,
      stock: 45,
      trend: "+15%",
    },
    {
      id: 12,
      name: "Smart Watch Series X",
      category: "Electronics",
      sales: 980,
      revenue: 196000,
      stock: 23,
      trend: "+22%",
    },
    {
      id: 13,
      name: "Laptop Stand Aluminum",
      category: "Accessories",
      sales: 756,
      revenue: 37800,
      stock: 120,
      trend: "+8%",
    },
    {
      id: 14,
      name: "USB-C Hub 7-in-1",
      category: "Accessories",
      sales: 654,
      revenue: 32700,
      stock: 5,
      trend: "-3%",
    },
    {
      id: 15,
      name: "Gaming Mouse RGB",
      category: "Electronics",
      sales: 543,
      revenue: 27150,
      stock: 89,
      trend: "+12%",
    },
    {
      id: 16,
      name: "Mechanical Keyboard",
      category: "Electronics",
      sales: 432,
      revenue: 64800,
      stock: 34,
      trend: "+5%",
    },
    {
      id: 17,
      name: "Phone Case Premium",
      category: "Accessories",
      sales: 398,
      revenue: 11940,
      stock: 2,
      trend: "-8%",
    },
    {
      id: 18,
      name: "Bluetooth Speaker",
      category: "Electronics",
      sales: 387,
      revenue: 38700,
      stock: 67,
      trend: "+18%",
    },
    {
      id: 19,
      name: "Webcam HD 1080p",
      category: "Electronics",
      sales: 321,
      revenue: 28890,
      stock: 45,
      trend: "+10%",
    },
    {
      id: 20,
      name: "Monitor Stand Wood",
      category: "Accessories",
      sales: 298,
      revenue: 17880,
      stock: 78,
      trend: "+6%",
    },
    {
      id: 21,
      name: "Monitor Stand Wood",
      category: "Accessories",
      sales: 298,
      revenue: 17880,
      stock: 78,
      trend: "+6%",
    },
  ];

  return (
    <>
      <div className="product-container">
        <div className="pc1">
          <div className="icon">
            {" "}
            <Package />{" "}
          </div>
          <p className="pro">Total Product</p>
          <div className="text">
            {" "}
            <p>6,000</p>
          </div>
        </div>
        <div className="pc1">
          <div className="icon-available">
            {" "}
            <PackageCheck />{" "}
          </div>
          <p className="pro">Available Product</p>
          <div className="text">
            {" "}
            <p>6,000</p>
          </div>
        </div>
        <div className="pc1">
          <div className="icon-trash">
            {" "}
            <Trash />{" "}
          </div>
          <p className="pro">Out of Stock</p>
          <div className="text">
            {" "}
            <p>6,000</p>
          </div>
        </div>
        <div className="pc1">
          <div className="icon-alert">
            {" "}
            <TriangleAlert />{" "}
          </div>
          <p className="pro">Low Stock Alert</p>
          <div className="text">
            {" "}
            <p>6,000</p>
          </div>
        </div>
      </div>
      <div>
        <div className="container1"> </div>
        <div className="container2"> </div>
        <div className="container3"> </div>
        <div className="container4"> </div>
      </div>

      <div className="search-container">
        <Search className="search-button" />
        <input
          type="text"
          placeholder="search products..."
          className="search"
        />
        <div className="select-container">
          <ChevronDown className="select-icon" />
          <select className="select">
            <option value="All">All Categories</option>
            <option value="Eletronics">Electronics</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>
      </div>

      <div className="tableContainer">
        <table className="productTable">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Product Name</th>
              <th className="text-category">Category</th>
              <th className="text-right">
                Sales
                <ArrowDownUp className="arrow" />
              </th>
              <th className="text-right">
                Revenue
                <ArrowDownUp className="arrow" />
              </th>
              <th className="text-center">
                Stock
                <ArrowDownUp className="arrow" />
              </th>
              <th className="text-center">Trend</th>
            </tr>
          </thead>
          <tbody>
            {database.map((data, index) => (
              <tr key={data.id}>
                <td>
                  <span className="index">{index + 1}</span>
                </td>
                <td>
                  <span className="name">{data.name}</span>
                </td>
                <td>
                  <span className="category">{data.category}</span>
                </td>
                <td className="sales">{data.sales.toLocaleString()}</td>
                <td className="revenue">${data.revenue.toLocaleString()}</td>
                <td className="stock">
                  <span
                    className={`data-stock ${data.stock < 20 ? "low" : "high"}`}
                  >
                    {data.stock}
                  </span>
                </td>
                <td className="trend">
                  <span
                    className={`data-trend ${
                      data.trend.startsWith("+") ? "up" : "low"
                    }`}
                  >
                    {data.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <p> Showing up Top 20 products. Sorted By Ascending</p>
      </div>
    </>
  );
}
