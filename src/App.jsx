import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './cover';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;