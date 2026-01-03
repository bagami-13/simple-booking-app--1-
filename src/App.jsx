import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cover from './cover';
// Add any other pages you have here:
// import About from './pages/About'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            {/* This is your main page */}
            <Route path="/" element={<Cover />} />
            
            {/* Add more routes here as you build them */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;