import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/AdminProducts.css";

const initialProducts = [
  { id: "A002", name: "Bike Helmet", category: "Automobiles", stock: 90, price: "₹1,999", image: "./helmet.jpg" },
  { id: "F004", name: "Leather Wallet", category: "Fashion", stock: 85, price: "₹799", image: "./wallet.jpg" },
  { id: "HL003", name: "Yoga Mat", category: "Health", stock: 100, price: "₹999", image: "./yoga-mat.jpg" },
  { id: "B002", name: "Matte Liquid Lipstick", category: "Beauty", stock: 120, price: "₹499", image: "./lipstick.jpg" },
  { id: "G004", name: "Organic Honey", category: "Grocery", stock: 100, price: "₹399", image: "./honey.jpg" },
  { id: "BK002", name: "Self-Help Guide", category: "Books", stock: 75, price: "₹499", image: "./self-help.jpg" },
  { id: "T003", name: "Soft Teddy Bear", category: "Toys", stock: 85, price: "₹999", image: "./teddy-bear.jpg" },
  { id: "H001", name: "Memory Foam Pillow", category: "Home", stock: 60, price: "₹1,499", image: "./pillow.jpg" },
  { id: "E004", name: "Wireless Keyboard and Mouse", category: "Electronics", stock: 80, price: "₹2,199", image: "./keyboard-mouse.jpg" },
  { id: "A004", name: "Bike Gloves", category: "Automobiles", stock: 50, price: "₹999", image: "./bike-gloves.jpg" },
  { id: "S002", name: "Men's Running Shoes", category: "Sports", stock: 95, price: "₹2,199", image: "./running-shoes.jpg" },
  { id: "H002", name: "Non-Stick Cookware Set", category: "Home", stock: 40, price: "₹2,999", image: "./cookware.jpg" },
  { id: "B004", name: "Herbal Shampoo", category: "Beauty", stock: 70, price: "₹599", image: "./shampoo.jpg" },
  { id: "HL001", name: "Digital Blood Pressure Monitor", category: "Health", stock: 80, price: "₹2,199", image: "./bp-monitor.jpg" },
  { id: "E005", name: "Noise Cancelling Headphones", category: "Electronics", stock: 50, price: "₹3,999", image: "./headphones.jpg" },
  { id: "G001", name: "Organic Brown Rice", category: "Grocery", stock: 150, price: "₹499", image: "./brown-rice.jpg" },
  { id: "BK003", name: "Programming for Beginners", category: "Books", stock: 60, price: "₹799", image: "./coding-book.jpg" },
  { id: "T001", name: "Remote Control Car", category: "Toys", stock: 130, price: "₹1,299", image: "./rc-car.jpg" },
  { id: "F001", name: "Men's Slim Fit Jeans", category: "Fashion", stock: 75, price: "₹1,299", image: "./jeans.jpg" },
  { id: "S004", name: "Football", category: "Sports", stock: 75, price: "₹699", image: "./football.jpg" },
  { id: "E003", name: "Gaming Laptop", category: "Electronics", stock: 25, price: "₹89,999", image: "./gaming-laptop.jpg" },
  { id: "A001", name: "Car Cleaning Kit", category: "Automobiles", stock: 100, price: "₹1,299", image: "./car-kit.jpg" },
  { id: "H004", name: "5-Piece Wall Art", category: "Home", stock: 30, price: "₹3,999", image: "./wall-art.jpg" },
  { id: "S003", name: "Cricket Bat", category: "Sports", stock: 50, price: "₹1,999", image: "./cricket-bat.jpg" },
  { id: "B001", name: "Hydrating Face Serum", category: "Beauty", stock: 90, price: "₹799", image: "./face-serum.jpg" },
  { id: "T002", name: "Educational Building Blocks", category: "Toys", stock: 110, price: "₹899", image: "./building-blocks.jpg" },
  { id: "HL004", name: "Protein Powder", category: "Health", stock: 60, price: "₹1,499", image: "./protein.jpg" },
  { id: "E002", name: "Smart LED TV 42-inch", category: "Electronics", stock: 30, price: "₹24,999", image: "./tv.jpg" },
  { id: "H005", name: "Wooden Bookshelf", category: "Home", stock: 25, price: "₹5,999", image: "./bookshelf.jpg" },
  { id: "B005", name: "Organic Aloe Vera Gel", category: "Beauty", stock: 130, price: "₹299", image: "./aloevera.jpg" },
  { id: "BK001", name: "Bestseller Novel", category: "Books", stock: 85, price: "₹399", image: "./novel.jpg" },
  { id: "G002", name: "Cold-Pressed Olive Oil", category: "Grocery", stock: 90, price: "₹899", image: "./olive-oil.jpg" },
  { id: "S001", name: "Adjustable Dumbbell Set", category: "Sports", stock: 70, price: "₹3,499", image: "./dumbbell.jpg" },
  { id: "F002", name: "Women's Handbag", category: "Fashion", stock: 50, price: "₹1,999", image: "./handbag.jpg" },
  { id: "G003", name: "Almonds (500g)", category: "Grocery", stock: 120, price: "₹799", image: "./almonds.jpg" },
  { id: "A003", name: "Car Mobile Holder", category: "Automobiles", stock: 70, price: "₹599", image: "./car-holder.jpg" },
  { id: "H003", name: "LED Bedside Lamp", category: "Home", stock: 90, price: "₹1,199", image: "./lamp.jpg" },
  { id: "F005", name: "Casual Sneakers", category: "Fashion", stock: 60, price: "₹2,499", image: "./sneakers.jpg" },
  { id: "F003", name: "Unisex Sports Watch", category: "Fashion", stock: 45, price: "₹3,499", image: "./sports-watch.jpg" },
  { id: "E001", name: "Wireless Bluetooth Earbuds", category: "Electronics", stock: 100, price: "₹2,499", image: "./earbuds.jpg" },
  { id: "B003", name: "Charcoal Face Mask", category: "Beauty", stock: 95, price: "₹349", image: "./charcoal-mask.jpg" },
  { id: "HL002", name: "Herbal Immunity Booster", category: "Health", stock: 110, price: "₹599", image: "./immunity-booster.jpg" },
];

const AdminProducts = () => {
  const tableRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [products, setProducts] = useState(initialProducts);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;
    
    const headers = table.querySelectorAll("th");

    headers.forEach((header, index) => {
      if (index !== headers.length - 1) { // Skip the last header
        const resizer = document.createElement("div");
        resizer.classList.add("admin-products-resizer");
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

  const handleEdit = () => {
    window.scrollTo(0, 0);
    navigate(`/updateproducts`);
  };

  const handleDelete = (id) => {
    const productToDelete = products.find(product => product.id === id);
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setMessage(`${productToDelete.name} is deleted`);
    setTimeout(() => setMessage(""), 3000); 
  }; // Number of items per page

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

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

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
    navigate("/addproducts");  // Navigate to the user page
  };

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const headers = table.querySelectorAll("th");
    headers.forEach((header, index) => {
      if (index !== headers.length - 1) {
        const resizer = document.createElement("div");
        resizer.classList.add("admin-products-resizer");
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
    <div className="admin-products-table-container">
      <h2 className="admin-products-heading">Products</h2>
      <div className="admin-products-button-container">
        <button className="admin-products-add-product-btn" onClick={() => { window.scrollTo(0, 0); handleButtonClick(); }}> + Add products</button>
      </div>
      {message && <div className="delete-message">{message}</div>}  
      <table className="admin-products-table" ref={tableRef}>
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
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td className="admin-products-info">
                  <img src={product.image} alt="admin-products-profile" className="admin-products-image" />
                  <span className="admin-products-text-ellipsis">{product.name}</span>
                </td>
                <td className="admin-products-text-ellipsis">{product.category}</td>
                <td className="admin-products-text-ellipsis">{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <img src="./pencil.png" alt="Edit" className="admin-products-edit-icon" onClick={() => handleEdit(product.id)} />
                  <img src="./delete.png" alt="Delete" className="admin-products-delete-icon" onClick={() => handleDelete(product.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="no-admin-products-message">No products available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      {products.length > itemsPerPage && (
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

export default AdminProducts;