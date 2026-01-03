import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './cover';
// We are going to make sure the path is simple
import Booking from './pages/Booking'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;