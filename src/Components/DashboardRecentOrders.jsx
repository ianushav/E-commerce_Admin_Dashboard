import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/DashboardRecentOrders.css";

const orders = [
  { id: "#1234567", name: "James", date: "02/09/2025", payment: "Bank Transfer", price: "₹300", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234567", name: "Aswin", date: "02/09/2025", payment: "COD", price: "₹300", status: "Pending", image: "./pat2.jpeg"  },
  { id: "#1234567", name: "Ashok", date: "02/09/2025", payment: "Gpay", price: "₹300", status: "Completed", image: "./pat2.jpeg"  },
  { id: "#1234567", name: "Jin", date: "02/09/2025", payment: "Phone pe", price: "₹300", status: "Progressing", image: "./pat2.jpeg"  }
];

const DashboardRecentOrders = () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const headers = table.querySelectorAll("th");
    headers.forEach((header, index) => {
      if (index !== headers.length - 1) {
        const resizer = document.createElement("div");
        resizer.classList.add("dashboard-orders-resizer");
        header.appendChild(resizer);
        resizer.addEventListener("mousedown", startResize);
      }
    });

    function startResize(event) {
      const header = event.target.parentElement;
      const startX = event.pageX;
      const startWidth = header.offsetWidth;

      function resizing(e) {
        header.style.width = `${startWidth + (e.pageX - startX)}px`;
      }

      function stopResize() {
        document.removeEventListener("mousemove", resizing);
        document.removeEventListener("mouseup", stopResize);
      }

      document.addEventListener("mousemove", resizing);
      document.addEventListener("mouseup", stopResize);
    }
  }, []);

  const handleButtonClick = () => navigate("/orders");

  return (
    <div className="dashboard-recent-orders-table-container">
      <h2 className="dashboard-recent-orders-heading">Recent Orders</h2>
      <table className="dashboard-recent-orders-table" ref={tableRef}>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Name</th>
            <th>Date</th>
            <th>Payment</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td className="dashboard-recent-orders-info">
                  <img src={order.image} alt="dashboard-recent-orders-profile" className="dashboard-recent-orders-image" />
                  <span className="dashboard-recent-orders-text-ellipsis">{order.name}</span>
                </td>
                <td className="dashboard-recent-orders-text-ellipsis">{order.date}</td>
                <td className="dashboard-recent-orders-text-ellipsis">{order.payment}</td>
                <td>{order.price}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-dashboard-orders-message">No orders available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="dashboard-recent-orders-button-container">
        <button className="dashboard-recent-orders-explore-btn" onClick={() => { window.scrollTo(0, 0); handleButtonClick(); }}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default DashboardRecentOrders;
