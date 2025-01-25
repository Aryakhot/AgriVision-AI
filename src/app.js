// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiseaseDetection from './diseasedet';  // Path to your DiseaseDetection component
import HomePage from './homepage';  // Updated path to your new HomePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diseasedet" element={<DiseaseDetection />} />
      </Routes>
    </Router>
  );
}

export default App;

