import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AdminSidebar from "./Components/AdminSidebar";
import Dashboard from "./Components/Dashboard";
import AdminCustomers from "./Components/AdminCustomers";
import AdminOrders from "./Components/AdminOrders";
import AdminProducts from "./Components/AdminProducts";
import AddProducts from "./Components/AddProducts";
import UpdateProducts from "./Components/UpdateProducts";

function App() {
  return (
    <StrictMode>
      <Router basename="/E-commerce_Admin_Dashboard">  {/* 👈 Fix for GitHub Pages */}
        <div className="d-flex flex-md-row">
          {/* Sidebar */}
          <AdminSidebar />
          <div className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<AdminCustomers />} />
              <Route path="/orders" element={<AdminOrders />} />
              <Route path="/products" element={<AdminProducts />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/updateproducts" element={<UpdateProducts />} />
            </Routes>
          </div>
        </div>
      </Router>
    </StrictMode>
  );
}

export default App;
