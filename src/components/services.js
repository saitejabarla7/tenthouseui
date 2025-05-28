// import React from 'react';

// const Services = () => {
//   return (
//     <section style={{ padding: '2rem', textAlign: 'center' }}>
//     <h2>Our Services</h2>
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
//       <div style={{ border: '1px solid #ddd', padding: '1rem', textAlign: 'center', height: '400px', position: 'relative' }}>
//         <h3>Weddings</h3>
//         <p>Plan your dream wedding with us.</p>
//         <img
//           src="https://shaadiwish.com/blog/wp-content/uploads/2020/11/02-lumiere-wedding-co5.jpg"
//           alt="home-screen"
//           style={{
//             width: '100%',
//             height: 'calc(100% - 80px)', // Subtracting space for text
//             objectFit: 'cover',
//             borderRadius: '8px',
//             marginTop: '10px'
//           }}
//         />
//       </div>
//       <div style={{ border: '1px solid #ddd', padding: '1rem', textAlign: 'center', height: '400px', position: 'relative' }}>
//         <h3>Corporate Events</h3>
//         <p>Professional events tailored to your needs.</p>
//         <img
//           src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           alt="home-screen"
//           style={{
//             width: '100%',
//             height: 'calc(100% - 80px)',
//             objectFit: 'cover',
//             borderRadius: '8px',
//             marginTop: '10px'
//           }}
//         />
//       </div>
//       <div style={{ border: '1px solid #ddd', padding: '1rem', textAlign: 'center', height: '400px', position: 'relative' }}>
//         <h3>Parties</h3>
//         <p>Memorable celebrations for any occasion.</p>
//         <img
//           src="https://i.pinimg.com/736x/c7/78/e3/c778e39e2ccc5a95c5f577363c04ccb0.jpg"
//           alt="home-screen"
//           style={{
//             width: '100%',
//             height: 'calc(100% - 80px)',
//             objectFit: 'cover',
//             borderRadius: '8px',
//             marginTop: '10px'
//           }}
//         />
//       </div>
//     </div>
//   </section>
//   );
// };

// export default Services;

import React from 'react';

const Services = () => {
  return (
    <section style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      background: '#121212',
      minHeight: '100vh',
      position: 'relative'  // Added for video positioning

    }}>
      // ... existing code ...
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.3
        }}
      >
        <source src="/3189043-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <h2 style={{ 
        fontFamily: "'Dancing Script', cursive", 
        color: '#c4b46c',
        fontSize: '3.5rem',
        marginBottom: '2rem'
      }}>Our Services</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '2rem', 
        maxWidth: '1200px', 
        margin: '0 auto',
        padding: '2rem'
      }}>
        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1.5rem', 
          textAlign: 'center', 
          height: '450px', 
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
        }}>
          <h3 style={{ 
            fontFamily: "'Dancing Script', cursive", 
            color: '#c4b46c',
            fontSize: '2.2rem',
            marginBottom: '0.5rem'
          }}>Weddings</h3>
          <p style={{ 
          color: '#c4b46c',
            marginBottom: '1rem',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem'
          }}>Plan your dream wedding with us.</p>
          <img
            src="https://shaadiwish.com/blog/wp-content/uploads/2020/11/02-lumiere-wedding-co5.jpg"
            alt="home-screen"
            style={{
              width: '100%',
              height: 'calc(100% - 100px)',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '10px',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)'
            }}
          />
        </div>

        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1.5rem', 
          textAlign: 'center', 
          height: '450px', 
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
        }}>
          <h3 style={{ 
            fontFamily: "'Dancing Script', cursive", 
            color: '#c4b46c',
            fontSize: '2.2rem',
            marginBottom: '0.5rem'
          }}>Corporate Events</h3>
          <p style={{ 
          color: '#c4b46c',
            marginBottom: '1rem',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem'
          }}>Professional events.</p>
          <img
            src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="home-screen"
            style={{
              width: '100%',
              height: 'calc(100% - 100px)',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '10px',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)'
            }}
          />
        </div>

        <div style={{ 
          border: '2px solid #c4b46c', 
          padding: '1.5rem', 
          textAlign: 'center', 
          height: '450px', 
          position: 'relative',
          background: '#1a1a1a',
          borderRadius: '15px',
          boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
        }}>
          <h3 style={{ 
            fontFamily: "'Dancing Script', cursive", 
            color: '#c4b46c',
            fontSize: '2.2rem',
            marginBottom: '0.5rem'
          }}>Parties</h3>
          <p style={{ 
          color: '#c4b46c',
            marginBottom: '1rem',
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.2rem'
          }}>Memorable celebrations.</p>
          <img
            src="https://i.pinimg.com/736x/c7/78/e3/c778e39e2ccc5a95c5f577363c04ccb0.jpg"
            alt="home-screen"
            style={{
              width: '100%',
              height: 'calc(100% - 100px)',
              objectFit: 'cover',
              borderRadius: '8px',
              marginTop: '10px',
              boxShadow: '0 0 15px rgba(0,0,0,0.3)'
            }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;