import Navbar from "../screens/Navbar";
import Footer from './Footer';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FileUpload = ({ handleFileChange }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileChange(e);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...selectedFiles]);
    handleFileChange(e);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const fileUploadHeight =
    uploadedFiles.length > 0 ? uploadedFiles.length * 50 + "px" : "200px"; // Adjust height based on the number of files

  return (
    <>
      <div
        className={`w-80% bg-white border-dashed border-4 border-gray-300 rounded-lg p-8 mb-[40px] ml-[40px] mr-[40px] mt-[40px] ${
          isDragOver ? "bg-gray-100" : "bg-transparent"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{ height: fileUploadHeight }} // Dynamically set height
      >
        <label htmlFor="fileInput" className="block mb-4 text-center">
          <img
            src="/upload-icon.svg"
            alt="Upload Icon"
            className="mx-auto mb-2"
            style={{ width: "100%", height: "30%" }}
          />
          <div>Drag & Drop files here</div>
          <div>or</div>
          <div className="text-blue-500">Click to select files</div>
        </label>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          multiple
        />
      </div>
      <div className="mt-4 ml-[40px] mr-[40px]">
        {uploadedFiles.map((file, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <span>{file.name}</span>
            <button
              className="text-red-600 hover:text-red-700"
              onClick={() => handleFileRemove(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {isUploading && (
        <div className="mt-4 ml-[40px] mr-[40px]">
          <progress value={uploadProgress} max="100"></progress>
        </div>
      )}
    </>
  );
};

function DonateEssentials() {
  const [formData, setFormData] = useState({
    "Your Name": "",
    Email: "",
    "Product Name": "",
    "Product Expiry": "",
    description: "",
    files: null,
  });

  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitClick = async () => {
    setIsSubmitting(true);
    // Simulate submit action
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/");
    }, 3000); // Simulating a 3-second delay
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, files: e.target.files });
  };

  return (
    <div>
      <Navbar />
      <div className="mx-1 p-5">
        <form className="bg-gray-200 m-3 h-[43rem] p-[20px]">
          <div className="flex justify-between gap-4 mb-6">
            <div className="ml-[40px] w-1/3">
              <label htmlFor="Your Name" className="block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="Your Name"
                value={formData["Your Name"]}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mr-[40px] w-1/3">
              <label htmlFor="Email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4 mb-6">
            <div className="ml-[40px] w-1/3">
              <label htmlFor="Product Name" className="block mb-1">
                Product Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="Product Name"
                value={formData["Product Name"]}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mr-[40px] w-1/3">
              <label htmlFor="Product Expiry" className="block mb-1">
                Product Expiry
              </label>
              <input
                type="text"
                placeholder="Product Expiry"
                name="Product Expiry"
                value={formData["Product Expiry"]}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </div>
          </div>
          <div className="ml-[40px] mr-[40px] w-80% mb-6">
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Description"
              cols="70"
              rows="5"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-2 w-full"
            ></textarea>
          </div>

          <FileUpload handleFileChange={handleFileChange} />

          <div className="flex justify-center ">
            <button
              className={`bg-green-600 w-[82rem] text-white p-2 rounded hover:bg-green-700 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleSubmitClick}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default DonateEssentials;
