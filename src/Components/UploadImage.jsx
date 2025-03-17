import { useState } from "react";

const UploadImages = () => {
  const [images, setImages] = useState([]);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  // Remove Image
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="add-product1-card">
      <h3 className="add-product-details-title">Upload Image</h3>

      <div className={`uploaded-images ${images.length > 7 ? "scrollable" : ""}`}>
        {/* Display Uploaded Images */}
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`Uploaded ${index}`} className="uploaded-image" />
            <button onClick={() => handleRemoveImage(index)} className="remove-btn">×</button>
          </div>
        ))}

        {/* Upload Button */}
        <label htmlFor="image-upload" className="upload-btn">+</label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      {/* Styles */}
      <style>{`
        .uploaded-images {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-auto-rows: 100px;
          gap: 10px;
          width: 100%;
          max-height: 220px; /* Default height */
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }

        .uploaded-images.scrollable {
          max-height: 320px; /* Expandable height */
          overflow-y: auto;
        }

        .uploaded-images::-webkit-scrollbar {
          width: 8px;
        }

        .uploaded-images::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }

        .uploaded-images::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        .image-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
        }

        .uploaded-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 5px;
        }

        .remove-btn {
          position: absolute;
          top: 5px;
          right: 5px;
          background: red;
          color: white;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .upload-btn {
          font-size: 40px;
          background: #ddd;
          border-radius: 25%;
          width: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default UploadImages;
