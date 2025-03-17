import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AdminNavbar from "./Components/AdminNavbar";
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
      <Router basename="/E-commerce_Admin_Dashboard">
        <AdminNavbar />
        <div className="d-flex flex-md-row">
          {/* Sidebar */}
          <AdminSidebar />
          <div className="flex-grow-1 p-3">
            <Routes>
              {/* Default Route (Redirect to /dashboard) */}
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customers" element={<AdminCustomers />} />
              <Route path="/orders" element={<AdminOrders />} />
              <Route path="/products" element={<AdminProducts />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/updateproducts" element={<UpdateProducts />} />
              {/* Catch-all for Undefined Routes */}
              <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
          </div>
        </div>
      </Router>
    </StrictMode>
  );
}

export default App;
