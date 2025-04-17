// src/components/About.js

import React from 'react';

const About = () => {
  return (
    <div style={aboutContainerStyle}>
      <h2>About Us</h2>
      <div style={aboutContentStyle}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXeqFNJeqMRsQ-TqzG3x9ij5cgECZiihAMg&s" 
          alt="Tent House"
          style={aboutImageStyle} 
        />
        <div>
          <p>
            Welcome to <strong>SriSai TentHouse Supplies</strong> — your trusted supplier of quality tents and accessories for over 20 years. Whether you’re hosting an outdoor event, wedding, or corporate gathering, we provide the best tent solutions to meet your needs.
          </p>
          <p>
            Our story began in 2003 with a passion for creating comfortable and beautiful outdoor spaces. Over the years, we’ve expanded our product offerings and services to cater to a wide range of events and occasions.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Reliable and durable tents</li>
            <li>Excellent customer service</li>
            <li>Affordable pricing for all types of events</li>
            <li>Customized designs and setup options</li>
            <li>On-time delivery and setup</li>
          </ul>
          <h3>Our Achievements</h3>
          <p>
            We have successfully supplied and set up tents for over 500 events across the country, ranging from weddings to large-scale corporate conferences. Our commitment to quality and customer satisfaction has earned us a reputation as a leading supplier in the tent rental industry.
          </p>
          <p>
            Thank you for choosing TentHouse Supplies. We look forward to helping you create the perfect outdoor experience!
          </p>
        </div>
      </div>
    </div>
  );
};

const aboutContainerStyle = {
  padding: '20px',
  maxWidth: '1200px',
  margin: 'auto',
  textAlign: 'center',
};

const aboutContentStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '20px',
  padding: '20px',
  marginLeft: '200px' // Previously 500px, now shifted 200px more to the right

};

const aboutImageStyle = {
  width: '400px',
  height: '300px',
  objectFit: 'cover',
};

export default About;

