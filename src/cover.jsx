import React from 'react';

export default function Cover() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ fontSize: '3rem', color: '#2563eb' }}>Bagami Booking</h1>
      <p style={{ color: '#64748b' }}>Your app is now live and building correctly.</p>
      <button style={{ 
        marginTop: '20px', 
        padding: '12px 24px', 
        backgroundColor: '#2563eb', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        Explore Events
      </button>
    </div>
  );
}