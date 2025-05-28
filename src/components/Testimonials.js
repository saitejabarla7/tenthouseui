import React from 'react';

const Testimonials = () => {
  return (
    <section style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center',
      background: '#121212',
      minHeight: '60vh'
    }}>
      <h2 style={{ 
        fontFamily: "'Dancing Script', cursive",
        color: '#c4b46c',
        fontSize: '3.5rem',
        marginBottom: '3rem'
      }}>Client Testimonials</h2>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.8rem',
            marginBottom: '1rem',
            fontStyle: 'italic'
          }}>"SriSai Events made our wedding day absolutely perfect! Every detail was handled with care and elegance."</p>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem',
            opacity: 0.8
          }}>- Priya & Raj</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.8rem',
            marginBottom: '1rem',
            fontStyle: 'italic'
          }}>"The best corporate event we've ever hosted! Professional, innovative, and flawlessly executed."</p>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem',
            opacity: 0.8
          }}>- TechCorp</p>
        </div>

        <div>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.8rem',
            marginBottom: '1rem',
            fontStyle: 'italic'
          }}>"Our birthday celebration was truly unforgettable! The attention to detail was remarkable."</p>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem',
            opacity: 0.8
          }}>- Sarah K.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;