import React from 'react';

const Events = () => {
  return (
    <section style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      background: '#121212',
      minHeight: '100vh'
    }}>
      <h2 style={{ 
        fontFamily: "'Dancing Script', cursive", 
        color: '#c4b46c',
        fontSize: '3.5rem',
        marginBottom: '2rem'
      }}>Past Events</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', // Changed to 4 columns
        gap: '1.5rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '2rem'
      }}>
        {/* Wedding Circle */}
       
        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1rem', 
          textAlign: 'center', 
          height: '200px', // Reduced height
          width: '200px', // Reduced width
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(196, 180, 108, 0.2)',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <p style={{ 
            color: '#c4b46c',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1rem',
            marginBottom: '5px',
            position: 'absolute',
            top: '10px',
            width: '100%',
            left: '0'
          }}>Wedding Celebration</p>
          <img 
            src="https://cdn0.weddingwire.in/article/8327/original/1920/jpg/127238-bengaluru-wedding-productions2.webp" 
            alt="Wedding Event" 
            style={{ 
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -40%)'
            }} 
          />
        </div>


        {/* Corporate Meeting Circle */}
        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1rem', 
          textAlign: 'center', 
          height: '200px', // Reduced height
          width: '200px', // Reduced width
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(196, 180, 108, 0.2)',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 15px'
          }}>
            <img 
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201809/image1_0.jpeg?size=690:388" 
              alt="Corporate Event" 
              style={{ 
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px'
              }} 
            />
            <p style={{ 
              color: '#c4b46c',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1rem'
            }}>Corporate Meeting</p>
          </div>
        </div>

        {/* Birthday Circle */}
        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1rem', 
          textAlign: 'center', 
          height: '200px', // Reduced height
          width: '200px', // Reduced width
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(196, 180, 108, 0.2)',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 15px'
          }}>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ72TILnU1GNxpsfbJRWDUTwd2wkXdiymbesg&s" 
              alt="Birthday Event" 
              style={{ 
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px'
              }} 
            />
            <p style={{ 
              color: '#c4b46c',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1rem'
            }}>Birthday Celebration</p>
          </div>
        </div>

        {/* House Warming Circle */}
        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1rem', 
          textAlign: 'center', 
          height: '200px', // Reduced height
          width: '200px', // Reduced width
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(196, 180, 108, 0.2)',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            padding: '0 15px'
          }}>
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5b953d9f70e80221c4a23ed0/1685636629590-ZGNNWZ1U51C8SX8TNT5R/_C1_4629-Edit.JPG?format=2500w" 
              alt="House Warming" 
              style={{ 
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '10px'
              }} 
            />
            <p style={{ 
              color: '#c4b46c',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1rem'
            }}>House Warming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;