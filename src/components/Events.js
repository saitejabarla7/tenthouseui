import React from 'react';

const Events = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center', background: '#f9f9f9' }}>
      <h2>Past Events</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <img src="https://via.placeholder.com/300x200" alt="Event 1" style={{ width: '100%' }} />
          <p>Wedding - Jan 2025</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <img src="https://via.placeholder.com/300x200" alt="Event 2" style={{ width: '100%' }} />
          <p>Corporate Gala - Feb 2025</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <img src="https://via.placeholder.com/300x200" alt="Event 3" style={{ width: '100%' }} />
          <p>Birthday Party - Mar 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Events;