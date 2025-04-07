
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 100px;
  height: 100vh;
  background: purple;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 2rem;
  padding: 0 1rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 3px;
    background: #2ecc71;
    border-radius: 2px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0.5rem 0;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: ${props => props.active ? '#2ecc71' : 'white'};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'rgba(46, 204, 113, 0.1)' : 'transparent'};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }

  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: '/', label: '🏠 Home' },
    { path: '/products', label: '🛍️ Products' },
    { path: '/about', label: 'ℹ️ About' },
    { path: '/cart', label: '🛒 Cart' },
    { path: '/qr', label: '📱 QR Scanner' }
  ];

  return (
    <SidebarContainer style={{ width: isOpen ? '250px' : '70px' }}>
      <Logo>
        {isOpen ? 'SriSai' : 'SS'}
      </Logo>
      <NavList>
        {menuItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink 
              to={item.path}
              active={location.pathname === item.path ? 1 : 0}
            >
              {isOpen ? item.label : item.label.split(' ')[0]}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;