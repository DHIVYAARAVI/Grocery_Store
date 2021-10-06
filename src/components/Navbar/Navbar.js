import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './navbar.css'
import img6 from '../../images/9.png'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <img src={img6} className="nav_img"/>
      <Navbar light expand="md" className="nav_navbar">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar_all" navbar>
            <NavItem className="nav_fonts">
              <NavLink href="#" className="nav_font">Shop</NavLink>
            </NavItem>
            <NavItem className="nav_fonts">
              <NavLink href="#" className="nav_font">Best Sellers</NavLink>
            </NavItem>
            <NavItem className="nav_fonts">
              <NavLink href="#" className="nav_font">Deals</NavLink>
            </NavItem>
            <NavItem className="nav_fonts">
              <NavLink href="#" className="nav_font">Pages</NavLink>
            </NavItem>
            <NavItem className="nav_fonts">
              <NavLink href="#" className="nav_font">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;