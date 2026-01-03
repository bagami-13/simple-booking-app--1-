import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './cover';
// Notice 'pages' is lowercase here to match your folder
import Booking from './pages/Booking'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Booking />} />
          <Route path="/book-slot" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;