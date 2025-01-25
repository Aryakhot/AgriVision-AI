import React, { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function CropDiseaseDetection() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [results, setResults] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      description: "Powdery Mildew detected on Tomato leaves.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      description: "Brown Spot disease identified on Rice plants.",
    },
  ]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Placeholder for backend connection
      alert(`File uploaded: ${file.name}`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Crop Disease Detection</h1>
      <p className="text-center mb-6 text-gray-600">
        Identify diseases in your crops by uploading images for analysis. Follow the instructions below to submit your images and receive results:
      </p>
      <ul className="text-gray-700 mb-6">
        <li>- Ensure your image is clear and focused on the affected area of the crop.</li>
        <li>- Upload images in JPEG or PNG format.</li>
        <li>- Click on the 'Upload Image' button below to select your file.</li>
        <li>- Wait a few moments for the analysis results to be generated.</li>
      </ul>

      <div className="border-dashed border-2 border-gray-300 rounded-lg p-6 mb-6 text-center">
        <input
          type="file"
          accept="image/jpeg, image/png"
          className="hidden"
          id="file-upload"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium shadow-md flex items-center justify-center gap-2">
          <UploadCloud className="w-5 h-5" /> Upload Image
        </label>
        {uploadedFile && (
          <p className="mt-4 text-gray-600">Uploaded: {uploadedFile.name}</p>
        )}
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Analysis Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((result) => (
          <div key={result.id} className="shadow-md border rounded-lg p-4">
            <img
              src={result.image}
              alt={result.description}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 font-medium">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
