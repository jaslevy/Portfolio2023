import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Nav.Link as={Link} to={to} className={isActive ? 'active' : ''}>
      {children}
    </Nav.Link>
  );
};

export default CustomNavLink;