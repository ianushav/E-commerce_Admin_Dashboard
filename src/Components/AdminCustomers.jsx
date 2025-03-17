import { useRef, useEffect, useState } from "react";
import "../Components/Styles/AdminCustomers.css";

const customers = [
  { id: "U001", name: "John Doe", email: "johndoe@gmail.com", contact: "9123456743", signupDate: "02/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U002", name: "Jane Smith", email: "jane@gmail.com", contact: "9123456743", signupDate: "02/09/2020", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U003", name: "Alice Johnson", email: "alice@gmail.com", contact: "9123456743", signupDate: "05/10/2021", status: "Active", image: "./pat2.jpeg" },
  { id: "U004", name: "David Lee", email: "davidlee@gmail.com", contact: "9123456743", signupDate: "12/01/2022", status: "Active", image: "./pat2.jpeg" },
  { id: "U005", name: "Jay Patel", email: "jaypatel@gmail.com", contact: "9123456743", signupDate: "15/03/2019", status: "Active", image: "./pat2.jpeg" },
  { id: "U006", name: "Jake White", email: "jake@gmail.com", contact: "9123456743", signupDate: "08/07/2021", status: "Active", image: "./pat2.jpeg" },
  { id: "U007", name: "Jackson Brown", email: "jackson@gmail.com", contact: "9123456743", signupDate: "19/11/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U008", name: "Emily Clark", email: "emily@gmail.com", contact: "9123456743", signupDate: "22/05/2022", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U009", name: "Michael Scott", email: "michael@gmail.com", contact: "9123456743", signupDate: "11/08/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U010", name: "Dwight Schrute", email: "dwight@gmail.com", contact: "9123456743", signupDate: "30/06/2019", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U011", name: "Jim Halpert", email: "jim@gmail.com", contact: "9123456743", signupDate: "14/02/2021", status: "Active", image: "./pat2.jpeg" },
  { id: "U012", name: "Pam Beesly", email: "pam@gmail.com", contact: "9123456743", signupDate: "05/04/2022", status: "Active", image: "./pat2.jpeg" },
  { id: "U013", name: "Oscar Martinez", email: "oscar@gmail.com", contact: "9123456743", signupDate: "10/09/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U014", name: "Kevin Malone", email: "kevin@gmail.com", contact: "9123456743", signupDate: "07/12/2021", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U015", name: "Angela Martin", email: "angela@gmail.com", contact: "9123456743", signupDate: "18/06/2018", status: "Active", image: "./pat2.jpeg" },
  { id: "U016", name: "Stanley Hudson", email: "stanley@gmail.com", contact: "9123456743", signupDate: "29/01/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U017", name: "Ryan Howard", email: "ryan@gmail.com", contact: "9123456743", signupDate: "23/07/2022", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U018", name: "Kelly Kapoor", email: "kelly@gmail.com", contact: "9123456743", signupDate: "15/05/2019", status: "Active", image: "./pat2.jpeg" },
  { id: "U019", name: "Toby Flenderson", email: "toby@gmail.com", contact: "9123456743", signupDate: "12/02/2021", status: "Active", image: "./pat2.jpeg" },
  { id: "U020", name: "Meredith Palmer", email: "meredith@gmail.com", contact: "9123456743", signupDate: "05/08/2020", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U021", name: "Creed Bratton", email: "creed@gmail.com", contact: "9123456743", signupDate: "08/03/2019", status: "Active", image: "./pat2.jpeg" },
  { id: "U022", name: "Darryl Philbin", email: "darryl@gmail.com", contact: "9123456743", signupDate: "20/11/2021", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U023", name: "Holly Flax", email: "holly@gmail.com", contact: "9123456743", signupDate: "14/04/2022", status: "Active", image: "./pat2.jpeg" },
  { id: "U024", name: "Jan Levinson", email: "jan@gmail.com", contact: "9123456743", signupDate: "02/10/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U025", name: "Gabe Lewis", email: "gabe@gmail.com", contact: "9123456743", signupDate: "26/09/2019", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U026", name: "Andy Bernard", email: "andy@gmail.com", contact: "9123456743", signupDate: "17/07/2021", status: "Active", image: "./pat2.jpeg" },
  { id: "U027", name: "Nellie Bertram", email: "nellie@gmail.com", contact: "9123456743", signupDate: "31/01/2018", status: "Active", image: "./pat2.jpeg" },
  { id: "U028", name: "Robert California", email: "robert@gmail.com", contact: "9123456743", signupDate: "29/12/2020", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U029", name: "Phyllis Smith", email: "phyllis@gmail.com", contact: "9123456743", signupDate: "07/10/2022", status: "Active", image: "./pat2.jpeg" },
  { id: "U030", name: "Bob Vance", email: "bob@gmail.com", contact: "9123456743", signupDate: "13/09/2019", status: "Active", image: "./pat2.jpeg" },
  { id: "U031", name: "Charles Miner", email: "charles@gmail.com", contact: "9123456743", signupDate: "06/02/2021", status: "Inactive", image: "./pat2.jpeg" },
  { id: "U032", name: "Jo Bennett", email: "jo@gmail.com", contact: "9123456743", signupDate: "09/08/2022", status: "Active", image: "./pat2.jpeg" },
  { id: "U033", name: "Clark Green", email: "clark@gmail.com", contact: "9123456743", signupDate: "23/11/2020", status: "Active", image: "./pat2.jpeg" },
  { id: "U034", name: "Pete Miller", email: "pete@gmail.com", contact: "9123456743", signupDate: "19/07/2018", status: "Inactive", image: "./pat2.jpeg" },
  // Add more up to U050
];

const ShopAdminCustomers = () => {
  const tableRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [activeTab, setActiveTab] = useState("All Customers");

  // Filter customers based on the active tab
  const filteredCustomers = customers.filter((user) => {
    if (activeTab === "All Customers") return true;
    if (activeTab === "Active Customers") return user.status === "Active";
    if (activeTab === "Inactive Customers") return user.status === "Inactive";
    return true;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

  // Total number of pages
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to the first page when the tab changes
  };

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
        resizer.classList.add("admin-customers-resizer");
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
    <div className="admin-customers-table-container">
      <h2 className="admin-customers-heading">Customers</h2>
      <div className="admin-orders-filters">
        {["All Customers", "Active Customers", "Inactive Customers"].map((tab) => (
          <button
            key={tab}
            className={`admin-customers-filters-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <table className="admin-customers-table" ref={tableRef}>
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
          {currentItems.length > 0 ? (
            currentItems.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td className="admin-customers-info">
                  <img src={user.image} alt="admin-customers-profile" className="admin-customers-image" />
                  <span className="admin-customers-text-ellipsis">{user.name}</span>
                </td>
                <td className="admin-customers-text-ellipsis">{user.email}</td>
                <td className="admin-customers-text-ellipsis">{user.contact}</td>
                <td>{user.signupDate}</td>
                <td className={`status ${user.status.toLowerCase()}`}>{user.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-admin-customers-message">No customers available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {filteredCustomers.length > itemsPerPage && (
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

export default ShopAdminCustomers;