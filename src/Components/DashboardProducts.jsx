import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/DashboardProducts.css";

const initialProducts = [
  { id: "H003", name: "LED Bedside Lamp", category: "Home", stock: 90, price: "₹1,199", image: "./lamp.jpg" },
  { id: "F005", name: "Casual Sneakers", category: "Fashion", stock: 60, price: "₹2,499", image: "./sneakers.jpg" },
  { id: "F003", name: "Unisex Sports Watch", category: "Fashion", stock: 45, price: "₹3,499", image: "./sports-watch.jpg" },
  { id: "E001", name: "Wireless Bluetooth Earbuds", category: "Electronics", stock: 100, price: "₹2,499", image: "./earbuds.jpg" },
  { id: "B003", name: "Charcoal Face Mask", category: "Beauty", stock: 95, price: "₹349", image: "./charcoal-mask.jpg" },
  { id: "HL002", name: "Herbal Immunity Booster", category: "Health", stock: 110, price: "₹599", image: "./immunity-booster.jpg" },
];

const DashboardProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [message, setMessage] = useState("");
  const tableRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;
    
    const headers = table.querySelectorAll("th");

    headers.forEach((header, index) => {
      if (index !== headers.length - 1) { // Skip the last header
        const resizer = document.createElement("div");
        resizer.classList.add("dashboard-products-resizer");
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
    window.scrollTo(0, 0);
    navigate("/products");  // Navigate to the user page
  };

  const handleEdit = () => {
    window.scrollTo(0, 0);
    navigate(`/updateproducts`, { state: { activeTab: "dashboard" } });
  };

  const handleDelete = (id) => {
    const productToDelete = products.find(product => product.id === id);
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setMessage(`${productToDelete.name} is deleted`);
    setTimeout(() => setMessage(""), 3000); 
  };

  return (
    <div className="dashboard-products-table-container">
      <h2 className="dashboard-products-heading">Products</h2>
      {message && <div className="delete-message">{message}</div>}  
      <table className="dashboard-products-table" ref={tableRef}>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="dashboard-products-info">
                  <img src={product.image} alt="dashboard-products-profile" className="dashboard-products-image" />
                  <span className="dashboard-products-text-ellipsis">{product.name}</span>
                </td>
                <td className="dashboard-products-text-ellipsis">{product.category}</td>
                <td className="dashboard-products-text-ellipsis">{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <img src="./pencil.png" alt="Edit" className="dashboard-products-edit-icon" onClick={() => handleEdit(product.id)} />
                  <img src="./delete.png" alt="Delete" className="dashboard-products-delete-icon" onClick={() => handleDelete(product.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-dashboard-products-message">No products available.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="dashboard-products-button-container">
        <button className="dashboard-products-explore-btn" onClick={() => { window.scrollTo(0, 0); handleButtonClick(); }}>Explore More</button>
      </div>
    </div>
  );
};

export default DashboardProducts;
