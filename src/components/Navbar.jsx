import React from 'react';

export default function Navbar() {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#2563eb', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between' 
    }}>
      <div style={{ fontWeight: 'bold' }}>Bagami Booking</div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <span>Home</span>
        <span>Events</span>
      </div>
    </nav>
  );
}