import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', backgroundColor: 'white', alignItems: 'center' }}>
      <Link to="/" style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none' }}>Bagami Booking App</Link>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#64748b' }}>Home</Link>
        <Link to="/booking" style={{ textDecoration: 'none', color: '#64748b' }}>Book Slot</Link>
      </div>
    </nav>
  );
}