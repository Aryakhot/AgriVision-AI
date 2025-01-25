import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiseaseDetection from './diseasedet'; // Make sure the path is correct
import HomePage from './new'; // You can use your existing HomePage component

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
