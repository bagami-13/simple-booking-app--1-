import React from 'react';

const slots = [
  { id: 1, time: '10:00 AM - 11:00 AM' },
  { id: 2, time: '11:00 AM - 12:00 PM' },
  { id: 3, time: '1:00 PM - 2:00 PM' },
  { id: 4, time: '3:00 PM - 4:00 PM' },
];

export default function Booking() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f0f2ff', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.8rem', color: '#1e293b', marginBottom: '10px', fontWeight: 'bold' }}>Welcome to Bagami Booking</h2>
      <p style={{ color: '#64748b', marginBottom: '50px', fontSize: '1.1rem' }}>Choose an available slot and book your time in seconds.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
        {slots.map((slot) => (
          <div key={slot.id} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#1e293b' }}>{slot.time}</h3>
            <p style={{ color: '#10b981', fontWeight: '600', marginBottom: '20px' }}>Available</p>
            <button style={{ 
              width: '100%', padding: '12px', backgroundColor: '#7c3aed', color: 'white', 
              border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem',
              transition: 'background 0.3s'
            }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}