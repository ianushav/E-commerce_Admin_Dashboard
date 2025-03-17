import { useState } from "react";
import "../Components/Styles/AddProducts.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faX} from '@fortawesome/free-solid-svg-icons';
import UploadImage from "./UploadImage";

const AddProduct = () => {
  const [product, setProduct] = useState({
    additionalInfo: [], // Start with one row
    productName: "",
    description: "",
    ingredients: "",
    keyFeatures: "",
    basicPrice: "",
    discountPercentage: "",
    discountAmount: "",
    availableStock: "",
    lowStockAlert: "",
    productCategory: "",
  });
  
  // State to control visibility of additional fields

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product:", product);
    // Add logic to save changes (e.g., API call)
  };

  // Define category-to-tags mapping
  const category = {
    "Electronics": ["Smartphones", "Laptops", "Smartwatches", "Headphones", "Drones"],
  "Fashion": ["Men's T-Shirts", "Women's Dresses", "Jeans", "Shoes", "Bags"],
  "Beauty": ["Lipstick", "Eyeliner", "Foundation", "Perfume", "Grooming Kits"],
  "Home": ["Kitchen Appliances", "Furniture", "Home Decor", "Cleaning Essentials"],
  "Health": ["Vitamins", "Protein Powder", "Yoga Mats", "Fitness Bands"],
  "Grocery": ["Fresh Fruits", "Organic Vegetables", "Dairy Products", "Snacks"],
  "Sports": ["Cricket Bat", "Football", "Badminton Racket", "Trekking Gear"],
  "Toys": ["Soft Toys", "Educational Games", "Remote Control Cars", "Dolls"],
  "Books": ["Novels", "Educational Books", "Comics", "Stationery Items"],
  "Automobiles": ["Car Covers", "Bike Helmets", "Tyre Inflators", "Car Perfumes"]
  };

  // Handle input change with comma separation
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Fields that require comma separation formatting
    const formattedFields = ["ingredients", "key_features"];
  
    if (formattedFields.includes(name)) {
      const formattedValue = value
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "")
        .join(", ");
  
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: formattedValue,
      }));
    } else {
      // Regular fields (like product_name and description) should remain unchanged
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };
  

  // Format input on blur (when user leaves the input field)
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const formattedValue = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "") // Remove empty entries
      .join(", "); // Store as formatted string

    setProduct({
      ...product,
      [name]: formattedValue,
    });
  };

  // Handle input while typing
  const handleTyping = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value, // Let users type naturally
    });
  };

  
  // Handle input change for Additional Information
  const handleAdditionalInfoChange = (index, field, value) => {
    const updatedInfo = [...product.additionalInfo];
    updatedInfo[index][field] = value;
    setProduct({ ...product, additionalInfo: updatedInfo });
  };

  // Add new topic & description row
  const addAdditionalInfo = () => {
    setProduct({
      ...product,
      additionalInfo: [...product.additionalInfo, { topic: "", description: "" }],
    });
  };

  // Remove topic & description row
  const removeAdditionalInfo = (index) => {
    const updatedInfo = [...product.additionalInfo];
    updatedInfo.splice(index, 1);
    setProduct({ ...product, additionalInfo: updatedInfo });
  };

  

  return (
    <div className="add-product-container">
      <h2 className="add-product-heading">Add Product</h2>
      <div className="action-buttons">
        <button className="add-products">Add Product</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="add-product-grid">
          {/* Product Details */}
          <div className="add-product-card">
            <h3 className="add-product-details-title">Product Details</h3>
            <label>Product Name</label>
            <input className="add-product-input" type="text" name="productName" placeholder="Enter product name" value={product.productName} onChange={handleInputChange}/>

            <label>Description</label>
            <textarea className="add-product-description" name="description" placeholder="Enter product description" value={product.description} onChange={handleInputChange} />

          </div>

          {/* Upload Image Section */}
<UploadImage />            

          {/* Pricing and Stock */}
          <div className="add-product-card1">
            <h3 className="add-product-details-title">Pricing and Stock</h3>
            <div className="pricing-grid">
              <div>
                <label>Basic Price</label>
                <input className="add-product-input" type="text" name="basicPrice" placeholder="Enter basic price" value={product.basicPrice} onChange={handleInputChange} />
              </div>
              <div>
                <label>Discount Percentage</label>
                <input className="add-product-input" type="text" name="discountPercentage" placeholder="Enter discount percentage" value={product.discountPercentage} onChange={handleInputChange} />
              </div>
              <div>
                <label>Discount Amount</label>
                <input className="add-product-input" type="text" name="discountAmount" placeholder="Enter discount amount" value={product.discountAmount} onChange={handleInputChange} />
              </div>
              <div>
                <label>Available Stock</label>
                <input className="add-product-input" type="text" name="availableStock" placeholder="Enter available stock" value={product.availableStock} onChange={handleInputChange} />
              </div>
              <div>
                <label>Low Stock Alert</label>
                <input className="add-product-input" type="text" name="lowStockAlert" placeholder="Enter low stock alert" value={product.lowStockAlert} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Basic Details */}
          <div className="add-product1-card">
            <h3 className="add-product-details-title">Basic Details</h3>
            <label>Product Category</label>
            <select className="add-product-input" name="productCategory" value={product.productCategory} onChange={handleInputChange}>
              <option>Select Category</option>
              {Object.keys(category).map((category) => (
                <option key={category} value={category}> {category} </option>
              ))} 
            </select>

            {/* Key Features */}
            <div className="add-product-section">
              <label>Key Features</label>
              <textarea className="add-product-description1" name="keyFeatures" placeholder="Enter key features (comma separated)" value={product.keyFeatures} onChange={handleTyping} onBlur={handleBlur} />
            </div>

            <div className="add-product-section">
              <label>Benefits</label>
              <textarea name="benefits" placeholder="Enter benefits (comma separated)" value={product.benefits} onChange={handleInputChange} onBlur={handleBlur} className="add-product-description1" />
            </div>

                {/* Additional Information Section */}
            <div className="add-product-section">
              <label>Additional Information</label>
              <div>
              {/* Only show the topic and description fields when there are rows in additionalInfo */}
              {product.additionalInfo.map((info, index) => (
                <div key={index} className="additional-info-row">
                <input type="text" className="add-product-input" placeholder="Topic" value={info.topic} onChange={(e) => handleAdditionalInfoChange(index, "topic", e.target.value)} required />
                <input type="text" className="add-product-input" placeholder="Description" value={info.description} onChange={(e) => handleAdditionalInfoChange(index, "description", e.target.value)} required />

                  {/* Always show the 'Cancel' button */}
                  <button type="button" className="remove-info-button" onClick={() => removeAdditionalInfo(index)} >
                    <FontAwesomeIcon icon={faX} />            
                  </button>
                </div>
              ))}

              {/* "Add More" button to add another row */}
              <button type="button" className="add-info-button" onClick={() => addAdditionalInfo()} >
                <FontAwesomeIcon icon={faPlus} /> Add More
              </button>
            </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;