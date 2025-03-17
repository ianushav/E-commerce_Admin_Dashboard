import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Styles/AdminProducts.css";

const initialProducts = [
  { id: "A001", name: "Aloe Vera Gel", category: "Skin Care", stock: 100, price: "₹399", image: "./aloevera.jpg" },
  { id: "A002", name: "Bhringraj Hair Oil", category: "Hair Care", stock: 50, price: "₹349",  image: "./aloevera.jpg" },
  { id: "A003", name: "Neem Capsules", category: "Medicine", stock: 30, price: "₹299", image: "./aloevera.jpg" },
  { id: "A004", name: "Baby Massage Oil", category: "Baby Care", stock: 200, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A005", name: "Onion Hair Serum", category: "Hair Care", stock: 70, price: "₹249",  image: "./aloevera.jpg" },
  { id: "A006", name: "Ashwagandha Capsules", category: "Medicine", stock: 150, price: "₹549", image: "./aloevera.jpg" },
  { id: "A007", name: "Sandalwood Face Pack", category: "Skin Care", stock: 120, price: "₹450",  image: "./aloevera.jpg" },
  { id: "A008", name: "Coconut Hair Oil", category: "Hair Care", stock: 90, price: "₹299",  image: "./aloevera.jpg" },
  { id: "A009", name: "Vitamin C Serum", category: "Skin Care", stock: 110, price: "₹499",  image: "./aloevera.jpg" },
  { id: "A010", name: "Organic Rose Water", category: "Skin Care", stock: 95, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A011", name: "Herbal Shampoo", category: "Hair Care", stock: 60, price: "₹399", image: "./aloevera.jpg" },
  { id: "A012", name: "Tea Tree Oil", category: "Skin Care", stock: 130, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A013", name: "Lavender Body Lotion", category: "Skin Care", stock: 85, price: "₹499",  image: "./aloevera.jpg" },
  { id: "A014", name: "Multani Mitti Face Pack", category: "Skin Care", stock: 75, price: "₹349", image: "./aloevera.jpg" },
  { id: "A015", name: "Charcoal Face Scrub", category: "Skin Care", stock: 80, price: "₹449", image: "./aloevera.jpg" },
  { id: "A016", name: "Almond Massage Oil", category: "Body Care", stock: 100, price: "₹599", image: "./aloevera.jpg" },
  { id: "A017", name: "Turmeric Cream", category: "Skin Care", stock: 50, price: "₹399",image: "./aloevera.jpg" },
  { id: "A018", name: "Mint Face Wash", category: "Skin Care", stock: 90, price: "₹299", image: "./aloevera.jpg" },
  { id: "A019", name: "Green Tea Night Cream", category: "Skin Care", stock: 65, price: "₹499", image: "./aloevera.jpg" },
  { id: "A020", name: "Honey Lip Balm", category: "Lip Care", stock: 150, price: "₹199", image: "./aloevera.jpg" },
  { id: "A021", name: "Cocoa Butter Lotion", category: "Body Care", stock: 95, price: "₹499", image: "./aloevera.jpg" },
  { id: "A022", name: "Rosemary Hair Oil", category: "Hair Care", stock: 60, price: "₹399", image: "./aloevera.jpg" },
  { id: "A023", name: "Lavender Essential Oil", category: "Aromatherapy", stock: 120, price: "₹399", sku: "LEO3301", image: "./aloevera.jpg" },
  { id: "A024", name: "Argan Hair Serum", category: "Hair Care", stock: 80, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A025", name: "Aloe Vera Gel for Sunburn", category: "Skin Care", stock: 150, price: "₹349", image: "./aloevera.jpg" },
  { id: "A026", name: "Sunscreen SPF 50", category: "Skin Care", stock: 200, price: "₹799",  image: "./aloevera.jpg" },
  { id: "A027", name: "Ginger Hair Oil", category: "Hair Care", stock: 90, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A028", name: "Cucumber Face Mask", category: "Skin Care", stock: 110, price: "₹299",  image: "./aloevera.jpg" },
  { id: "A029", name: "Neem Face Pack", category: "Skin Care", stock: 95, price: "₹499",  image: "./aloevera.jpg" },
  { id: "A030", name: "Herbal Bath Powder", category: "Body Care", stock: 150, price: "₹349",  image: "./aloevera.jpg" },
  { id: "A031", name: "Peppermint Foot Cream", category: "Body Care", stock: 120, price: "₹299", image: "./aloevera.jpg" },
  { id: "A032", name: "Aloe Vera Face Pack", category: "Skin Care", stock: 100, price: "₹249",  image: "./aloevera.jpg" },
  { id: "A033", name: "Shea Butter Body Cream", category: "Body Care", stock: 75, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A034", name: "Turmeric Face Mask", category: "Skin Care", stock: 60, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A035", name: "Bamboo Charcoal Soap", category: "Bath & Body", stock: 80, price: "₹249",  image: "./aloevera.jpg" },
  { id: "A036", name: "Tea Tree Face Wash", category: "Skin Care", stock: 130, price: "₹499", image: "./aloevera.jpg" },
  { id: "A037", name: "Carrot Seed Oil", category: "Aromatherapy", stock: 65, price: "₹449",  image: "./aloevera.jpg" },
  { id: "A038", name: "Pomegranate Lip Balm", category: "Lip Care", stock: 95, price: "₹199",  image: "./aloevera.jpg" },
  { id: "A039", name: "Vitamin E Oil", category: "Skin Care", stock: 120, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A040", name: "Coconut Body Scrub", category: "Body Care", stock: 150, price: "₹499",  image: "./aloevera.jpg" },
  { id: "A041", name: "Sandalwood Face Cream", category: "Skin Care", stock: 100, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A042", name: "Lavender Bath Oil", category: "Aromatherapy", stock: 90, price: "₹349",  image: "./aloevera.jpg" },
  { id: "A043", name: "Citrus Hand Cream", category: "Body Care", stock: 70, price: "₹299",  image: "./aloevera.jpg" },
  { id: "A044", name: "Basil Face Scrub", category: "Skin Care", stock: 80, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A045", name: "Herbal Face Cleanser", category: "Skin Care", stock: 100, price: "₹299",  image: "./aloevera.jpg" },
  { id: "A046", name: "Aloe Vera Face Mist", category: "Skin Care", stock: 75, price: "₹399",  image: "./aloevera.jpg" },
  { id: "A047", name: "Rose Face Mist", category: "Skin Care", stock: 60, price: "₹349",  image: "./aloevera.jpg" },
  { id: "A048", name: "Mint Foot Scrub", category: "Body Care", stock: 90, price: "₹249",  image: "./aloevera.jpg" },
  { id: "A049", name: "Olive Oil Body Lotion", category: "Body Care", stock: 100, price: "₹599",  image: "./aloevera.jpg" },
  { id: "A050", name: "Cinnamon Lip Scrub", category: "Lip Care", stock: 120, price: "₹249",  image: "./aloevera.jpg" }
];


const AdminProducts = () => {
  const tableRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
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