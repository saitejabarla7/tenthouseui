// // src/components/Header.js
// const Header = () => {
//     return (
//       <div style={headerStyle}>
//         <h1>Sri Sai Events</h1>
//       </div>
//     );
//   };
  
//   const headerStyle = {
//     backgroundColor: 'purple',
//     color: 'white',
//     padding: '5px',
//     textAlign: 'center',
//     marginbottom:'200px'
//     };
  
//   export default Header;
  

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(to right, #2c3e50, #3498db);
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to right, #ffffff, #2ecc71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Sri Sai Events</Title>
    </HeaderContainer>
  );
};

export default Header;