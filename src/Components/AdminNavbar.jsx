import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Styles/AdminNavbar.css";

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search state
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* ✅ Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="./ayur-logo.png" alt="Logo" className="law-icon" />
        </a>

        {/* ✅ Search Bar */}
        <form className="d-flex search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary" type="submit">
            🔍
          </button>
        </form>

        {/* ✅ Profile Section */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item profile-dropdown" ref={dropdownRef}>
              <div className="profile-container" onClick={toggleDropdown}>
                <img src="./pat2.jpeg" className="profile-image" />
              </div>
              {dropdownOpen && (
                <div className="dropdown-menu show">
                  <p className="dropdown-item"><b>Email:</b> magnuscarlsen@gmail.com </p>
                  <a href="#logout" className="dropdown-item"> Logout </a>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
