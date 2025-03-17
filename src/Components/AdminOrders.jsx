import { useRef, useEffect, useState } from "react";
import "../Components/Styles/AdminOrders.css";

const adminorders = [
  { id: "#1234567", name: "James", date: "02/09/2025", payment: "Bank Transfer", price: "₹300", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234568", name: "Aswin", date: "02/09/2025", payment: "COD", price: "₹300", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234569", name: "Ashok", date: "02/09/2025", payment: "Gpay", price: "₹300", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234570", name: "Jin", date: "02/09/2025", payment: "Phone pe", price: "₹300", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234571", name: "Jake", date: "02/09/2025", payment: "COD", price: "₹500", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234572", name: "Maya", date: "02/10/2025", payment: "UPI", price: "₹450", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234573", name: "Karan", date: "02/10/2025", payment: "Card Payment", price: "₹350", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234574", name: "Lina", date: "02/10/2025", payment: "UPI", price: "₹600", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234575", name: "Naveen", date: "02/11/2025", payment: "Bank Transfer", price: "₹250", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234576", name: "Meera", date: "02/11/2025", payment: "Phone pe", price: "₹500", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234577", name: "Ravi", date: "02/11/2025", payment: "COD", price: "₹400", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234578", name: "Arjun", date: "02/12/2025", payment: "Gpay", price: "₹350", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234579", name: "Anu", date: "02/12/2025", payment: "Bank Transfer", price: "₹700", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234580", name: "Dev", date: "02/12/2025", payment: "Card Payment", price: "₹600", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234581", name: "Sita", date: "02/13/2025", payment: "Phone pe", price: "₹800", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234582", name: "Vikram", date: "02/13/2025", payment: "Gpay", price: "₹900", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234583", name: "Raj", date: "02/13/2025", payment: "COD", price: "₹150", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234584", name: "Ayesha", date: "02/14/2025", payment: "Bank Transfer", price: "₹450", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234585", name: "Gaurav", date: "02/14/2025", payment: "UPI", price: "₹200", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234586", name: "Neha", date: "02/14/2025", payment: "Phone pe", price: "₹500", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234587", name: "Sandeep", date: "02/15/2025", payment: "COD", price: "₹300", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234588", name: "Anjali", date: "02/15/2025", payment: "Gpay", price: "₹550", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234589", name: "Priya", date: "02/15/2025", payment: "Bank Transfer", price: "₹700", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234590", name: "Vishal", date: "02/16/2025", payment: "Card Payment", price: "₹400", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234591", name: "Ritika", date: "02/16/2025", payment: "Phone pe", price: "₹500", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234592", name: "Suman", date: "02/16/2025", payment: "UPI", price: "₹350", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234593", name: "Rajesh", date: "02/17/2025", payment: "Gpay", price: "₹700", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234594", name: "Kriti", date: "02/17/2025", payment: "Bank Transfer", price: "₹400", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234595", name: "Yash", date: "02/17/2025", payment: "COD", price: "₹250", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234596", name: "Jeevan", date: "02/18/2025", payment: "Phone pe", price: "₹650", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234597", name: "Ishita", date: "02/18/2025", payment: "Gpay", price: "₹300", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234598", name: "Pooja", date: "02/18/2025", payment: "Bank Transfer", price: "₹800", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234599", name: "Madhav", date: "02/19/2025", payment: "COD", price: "₹550", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234600", name: "Parul", date: "02/19/2025", payment: "Gpay", price: "₹300", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234601", name: "Tanu", date: "02/19/2025", payment: "UPI", price: "₹450", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234602", name: "Amit", date: "02/20/2025", payment: "Card Payment", price: "₹350", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234603", name: "Suresh", date: "02/20/2025", payment: "Bank Transfer", price: "₹600", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234604", name: "Simran", date: "02/20/2025", payment: "Phone pe", price: "₹700", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234605", name: "Vinod", date: "02/21/2025", payment: "Gpay", price: "₹250", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234606", name: "Tushar", date: "02/21/2025", payment: "COD", price: "₹550", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234607", name: "Sonal", date: "02/21/2025", payment: "Bank Transfer", price: "₹400", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234608", name: "Niharika", date: "02/22/2025", payment: "Gpay", price: "₹350", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234609", name: "Sushil", date: "02/22/2025", payment: "UPI", price: "₹600", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234610", name: "Lalit", date: "02/22/2025", payment: "Bank Transfer", price: "₹700", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234611", name: "Kiran", date: "02/23/2025", payment: "Phone pe", price: "₹800", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234612", name: "Tanvi", date: "02/23/2025", payment: "Gpay", price: "₹200", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234613", name: "Pavan", date: "02/23/2025", payment: "COD", price: "₹500", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234614", name: "Ravi", date: "02/24/2025", payment: "UPI", price: "₹400", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234615", name: "Tanuja", date: "02/24/2025", payment: "Bank Transfer", price: "₹350", status: "Progressing", image: "./pat2.jpeg" },
  { id: "#1234616", name: "Anurag", date: "02/24/2025", payment: "Phone pe", price: "₹500", status: "Pending", image: "./pat2.jpeg" },
  { id: "#1234617", name: "Neelam", date: "02/25/2025", payment: "Gpay", price: "₹300", status: "Cancelled", image: "./pat2.jpeg" },
  { id: "#1234618", name: "Ramesh", date: "02/25/2025", payment: "UPI", price: "₹250", status: "Completed", image: "./pat2.jpeg" },
  { id: "#1234619", name: "Prakash", date: "02/25/2025", payment: "Bank Transfer", price: "₹700", status: "Pending", image: "./pat2.jpeg" }
];

// Remove duplicates based on `id`, `name`, `date`, `payment`, `price`, and `status`
const uniqueOrders = Array.from(new Set(adminorders.map(order => JSON.stringify({
  id: order.id,
  name: order.name,
  date: order.date,
  payment: order.payment,
  price: order.price,
  status: order.status
})))).map(order => JSON.parse(order));

// Add the `image` property back to each unique order
const finalOrders = uniqueOrders.map(order => ({
  ...order,
  image: "./pat2.jpeg" // Ensure the image property is retained
}));

console.log(finalOrders);

const AdminOrders = () => {
  const tableRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to the first page when the tab changes
  };

  // Filter adminorders based on the active tab
  const filteredOrders =
    activeTab === "All Orders"
      ? adminorders
      : adminorders.filter((order) => order.status.toLowerCase() === activeTab.toLowerCase());

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  // Function to generate pagination numbers with ellipsis
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Maximum number of page numbers to show

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const headers = table.querySelectorAll("th");
    headers.forEach((header, index) => {
      if (index !== headers.length - 1) {
        const resizer = document.createElement("div");
        resizer.classList.add("admin-orders-resizer");
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

  return (
    <div className="admin-orders-table-container">
      <h2 className="admin-orders-heading">Recent Orders</h2>
      <div className="admin-orders-filters">
        {["All Orders", "Completed", "Pending", "Progressing", "Cancelled"].map((tab) => (
          <button
            key={tab}
            className={`admin-orders-filters-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      <table className="admin-orders-table" ref={tableRef}>
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
          {currentItems.length > 0 ? (
            currentItems.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td className="admin-orders-info">
                  <img src={order.image} alt="admin-orders-profile" className="admin-orders-image" />
                  <span className="admin-orders-text-ellipsis">{order.name}</span>
                </td>
                <td className="admin-orders-text-ellipsis">{order.date}</td>
                <td className="admin-orders-text-ellipsis">{order.payment}</td>
                <td>{order.price}</td>
                <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-admin-orders-message">No adminorders available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {filteredOrders.length > itemsPerPage && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {getPaginationNumbers().map((number, index) => (
            <button
              key={index}
              onClick={() => typeof number === 'number' ? paginate(number) : null}
              className={currentPage === number ? "active" : ""}
              disabled={number === '...'}
            >
              {number}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;