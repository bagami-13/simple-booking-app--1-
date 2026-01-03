import React from 'react';

const slots = [
  { time: '10:00 AM - 11:00 AM', status: 'Available' },
  { time: '11:00 AM - 12:00 PM', status: 'Available' },
  { time: '1:00 PM - 2:00 PM', status: 'Available' },
  { time: '3:00 PM - 4:00 PM', status: 'Available' },
];

export default function Booking() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f5f3ff', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#1e293b' }}>Welcome to Bagami Booking</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>Choose an available slot and book your time in seconds.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {slots.map((slot, index) => (
          <div key={index} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{slot.time}</h3>
            <p style={{ color: '#10b981', fontWeight: 'bold' }}>{slot.status}</p>
            <button style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}