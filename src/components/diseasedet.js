//src/diseasedet
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Crop Disease Detection</h1>
        <p className="text-gray-600 mb-6">
          Identify diseases in your crops by uploading images for analysis. Follow the
          instructions below to submit your images and receive results:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Ensure your image is clear and focused on the affected area of the crop.</li>
          <li>Upload images in JPEG or PNG format.</li>
          <li>Click on the "Upload Image" button below to select your file.</li>
          <li>Wait a few moments for the analysis results to be generated.</li>
        </ul>

        <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center bg-gray-50">
          <button
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-600"
          >
            Upload Image
          </button>
          <p className="text-gray-500 mt-2">or drag and drop your file here</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Recent Analysis Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Powdery Mildew on Tomato leaves"
              className="w-full rounded mb-3"
            />
            <p className="text-gray-700 font-medium">
              Powdery Mildew detected on Tomato leaves.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Brown Spot on Rice plants"
              className="w-full rounded mb-3"
            />
            <p className="text-gray-700 font-medium">
              Brown Spot disease identified on Rice plants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

