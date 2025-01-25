// src/homepage.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to AgroVision AI</h1>
      <Link to="/diseasedet">
        <button>Detect Disease</button>
      </Link>
    </div>
  );
};

export default HomePage;

