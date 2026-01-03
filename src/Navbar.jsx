import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f8f9fa', display: 'flex', gap: '20px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'blue' }}>Bagami Booking</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
    </nav>
  );
}