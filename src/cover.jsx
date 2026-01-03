import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cover() {
  const navigate = useNavigate();
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
      height: '90vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center'
    }}>
      <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '25px', borderRadius: '50%', marginBottom: '20px', fontSize: '2rem' }}>📅</div>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Bagami Booking App</h1>
      <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '30px', maxWidth: '500px' }}>
        Effortlessly book your time slots with a clean and simple interface.
      </p>
      <button 
        onClick={() => navigate('/booking')}
        style={{ 
          padding: '15px 40px', backgroundColor: 'white', color: '#6366f1', 
          border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem'
        }}>
        Get Started
      </button>
    </div>
  );
}