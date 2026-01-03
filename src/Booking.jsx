import React from 'react';

const slots = [
  { id: 1, time: '10:00 AM - 11:00 AM' },
  { id: 2, time: '11:00 AM - 12:00 PM' },
  { id: 3, time: '1:00 PM - 2:00 PM' },
  { id: 4, time: '3:00 PM - 4:00 PM' },
];

export default function Booking() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f3f4ff', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#1e293b', fontWeight: 'bold' }}>Welcome to Bagami Booking</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>Choose an available slot and book your time in seconds.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {slots.map((slot) => (
          <div key={slot.id} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', width: '280px', boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{slot.time}</h3>
            <p style={{ color: '#10b981', fontWeight: 'bold', marginBottom: '20px' }}>Available</p>
            <button style={{ width: '100%', padding: '12px', backgroundColor: '#7c3aed', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}