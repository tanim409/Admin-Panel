import "./Product.css";
import {
  Package,
  Search,
  PackageCheck,
  TriangleAlert,
  Trash,
  ChevronDown,
  ArrowDownUp,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import { product_database } from "./ProductData";
import { useState } from "react";

export default function Product() {
  const [search, setSearch] = useState("");
  const [selectCategory, setSelectCategory] = useState("All");
  const [product] = useState(product_database);
  const [sortBy, setSortBy] = useState();
  const [sortOrder, setSortOrder] = useState("desc");

  const totalProducts = 6000000;
  const availProduct = product.filter((p) => p.stock > 0).length;
  const lowStock = product.filter((p) => p.stock > 20).length;
  const outOfStock = product.filter((p) => p.stock < 0).length;

  const filterdProducts = product.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectCategory === "All" || p.category === selectCategory;
    return matchSearch && matchCategory;
  });

  const sortProducts = [...filterdProducts].sort((a, b) => {
    let count = 0;

    if (sortBy === "sales") {
      count = a.sales - b.sales;
    }if (sortBy === "revenue") {
      count = a.revenue - b.revenue;
    }if (sortBy === "stock") {
      count = a.stock - b.stock;
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
      <div className="product-container">
        <div className="pc1">
          <div className="icon">
            {" "}
            <Package />{" "}
          </div>
          <p className="pro">Total Product</p>
          <div className="text">
            {" "}
            <p>{totalProducts}</p>
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
            <p>{availProduct}</p>
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
            <p>{outOfStock}</p>
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
            <p>{lowStock}</p>
          </div>
        </div>
      </div>

      <div className="search-container">
        <Search className="search-button" />
        <input
          type="text"
          placeholder="search products..."
          value={search}
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="select-container">
          <ChevronDown className="select-icon" />
          <select
            className="select"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
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
              <th className="text-right" onClick={() => handleSort('sales')}>
                Sales
                {sortBy === "sales" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>
              <th className="text-right" onClick={() => handleSort('revenue')}>
                Revenue
                {sortBy === "revenue" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              
              </th>
              <th className="text-center" onClick={() => handleSort('stock')}>
                Stock
                {sortBy === "stock" ? (
                  sortOrder === "asc" ? 
                    <ArrowUp className="arrow" /> : <ArrowDown className="arrow"/> ) :
                  <ArrowDownUp className="arrow" />
                }
              </th>
              <th className="text-center">Trend</th>
            </tr>
          </thead>
          <tbody>
            {sortProducts.map((data, index) => (
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
