import { Routes, Route } from "react-router-dom";
import User from "./User/User.jsx";
import Product from "./Product/Product.jsx";
import Home from "./Home";
import Analysis from "./Analysis/Analysis.jsx";
import Order from "./Order/Order.jsx";
import Market from "./Market/Market.jsx";
export default function Routing(){
    return (
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/analysis" element={<Analysis/>}/>
            <Route path="/order" element={<Order/>} />
            <Route path="/market" element={<Market/>}/>
         </Routes>
        
    );
}