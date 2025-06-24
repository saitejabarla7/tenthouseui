import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  overflow: hidden;
  color: #c4b46c;
  text-align: center;
`;

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   font-family: 'Dancing Script', cursive;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
   font-family: 'Dancing Script', cursive;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem;
  background: linear-gradient(to right,rgb(209, 200, 98),rgb(160, 158, 109));
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
   font-family: 'Dancing Script', cursive;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      {/* Video Background - Fixed path and added fallback image */}
      <VideoBackground 
        autoPlay 
        muted 
        loop 
        playsInline
      >
       <source src={`${process.env.PUBLIC_URL}/videos/4996454-uhd_4096_2160_24fps.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      
      {/* Added overlay for better text visibility */}
      <Overlay />

      {/* Foreground Content */}
      <Content>
        <Title>Celebrate with SriSai Events</Title>
        <Subtitle>Your one-stop solution for unforgettable events</Subtitle>
        <Button>Book Now</Button>
      </Content>
    </HeroSection>
  );
};

export default Hero;