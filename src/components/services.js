import React from 'react';

const Services = () => {
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Our Services</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
  <div style={{ border: '1px solid #ddd', padding: '1rem', textAlign: 'center' }}>
    <h3>Weddings</h3>
    <p>Plan your dream wedding with us.</p>
    <img
      src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
      alt="home-screen"
      style={{
        width: '100%',          // Ensures responsiveness
        maxWidth: '200px',      // Limits the maximum width (adjust as needed)
        height: 'auto',         // Maintains aspect ratio
        display: 'block',       // Prevents unwanted spacing
        margin: '0 auto',       // Centers the image
      }}
    />
  </div>
  {/* Repeat similar structure for other items */}
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>Corporate Events</h3>
          <p>Professional events tailored to your needs.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <h3>Parties</h3>
          <p>Memorable celebrations for any occasion.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;