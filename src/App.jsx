import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './cover';
import Booking from './pages/Booking'; // We will create this next

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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