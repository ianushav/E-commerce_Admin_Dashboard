import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/DashboardCustomers.css";

const customers = [
  { id: "U001", name: "John Doe", email: "johndoe@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U002", name: "Jane Smith", email: "jane@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U004", name: "David Lee", email: "davidlee@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U005", name: "Jay", email: "jay123456@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U006", name: "Jake", email: "jake@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U007", name: "Jackson", email: "jackson@gamil.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
];

const DashboardCustomers= () => {
  const tableRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const headers = table.querySelectorAll("th");
    headers.forEach((header, index) => {
      if (index !== headers.length - 1) { // Skip the last header
        const resizer = document.createElement("div");
        resizer.classList.add("dashboard-customers-resizer");
        header.appendChild(resizer);
        resizer.addEventListener("mousedown", startResize);
      }
    });

    function startResize(event) {
      const header = event.target.parentElement;
      const startX = event.pageX;
      const startWidth = header.offsetWidth;

      function resizing(e) {
        const newWidth = startWidth + (e.pageX - startX);
        header.style.width = `${newWidth}px`;
      }

      function stopResize() {
        document.removeEventListener("mousemove", resizing);
        document.removeEventListener("mouseup", stopResize);
      }

      document.addEventListener("mousemove", resizing);
      document.addEventListener("mouseup", stopResize);
    }
  }, []);

  const handleButtonClick = () => {
    navigate("/customers");  // Navigate to the user page
  };

  return (
    <div className="dashboard-customers-table-container">
      <h2 className="dashboard-customers-heading">Customers</h2>
      <table className="dashboard-customers-table" ref={tableRef}>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Contact</th>
            <th>SignUp Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
      {customers.length > 0 ? (
        customers.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td className="dashboard-customers-info">
              <img src={user.image} alt="dashboard-customers-profile" className="dashboard-customers-image" />
              <span className="dashboard-customers-text-ellipsis">{user.name}</span>
            </td>
            <td className="dashboard-customers-text-ellipsis">{user.email}</td>
            <td className="dashboard-customers-text-ellipsis">{user.contact}</td>
            <td>{user.signupDate}</td>
            <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
          </tr>
        ))
      ) : (
        /* Horizontal divider after each row */
        <tr>
          <td colSpan="6" className="no-dashboard-customers-message">No customers available</td>
        </tr>
      )}
    </tbody>
  </table>
  
      <div className="dashboard-customers-button-container">
        <button className="dashboard-customers-explore-btn" onClick={() => { window.scrollTo(0, 0); handleButtonClick(); }}>Explore More </button>
      </div>
    </div>
  );
};

export default DashboardCustomers;