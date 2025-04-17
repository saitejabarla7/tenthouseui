import React from 'react';

const Header = () => {
  return (
    <nav style={{ background: '#121211', color: '#c4b46c', padding: '1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <h2>SriSai Events</h2>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem' }}>
          <li><a href="#home" style={{ color: '#c4b46c', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#services" style={{ color: '#c4b46c', textDecoration: 'none' }}>Services</a></li>
          <li><a href="#events" style={{ color: '#c4b46c', textDecoration: 'none' }}>Events</a></li>
          <li><a href="#contact" style={{ color: '#c4b46c', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;