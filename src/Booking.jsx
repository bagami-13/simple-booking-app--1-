import React from 'react';

const slots = [
  { time: '10:00 AM - 11:00 AM' }, { time: '11:00 AM - 12:00 PM' },
  { time: '1:00 PM - 2:00 PM' }, { time: '3:00 PM - 4:00 PM' }
];

export default function Booking() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '10px' }}>Welcome to Bagami Booking</h2>
      <p style={{ color: '#64748b', marginBottom: '50px' }}>Choose an available slot and book your time in seconds.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1100px', margin: '0 auto' }}>
        {slots.map((slot, i) => (
          <div key={i} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{slot.time}</h3>
            <p style={{ color: '#10b981', fontWeight: '600' }}>Available</p>
            <button style={{ marginTop: '20px', width: '100%', padding: '12px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}