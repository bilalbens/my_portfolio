import React, { useState } from "react";
import {
  Collapse,
  Navbar as ReactstrapNavbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sticky-top" id="Navbar">
      <ReactstrapNavbar className="navbar-bg" light expand="sm">
        <NavbarBrand href="#header">
          <FontAwesomeIcon style={{color:"lightgrey"}} icon={faHome} />
        </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <NavItem>
                <li className="navbar-li">
                  <NavLink  style={{color:"lightgrey"}} href="#experience" >Experience</NavLink>
                  </li>
              </NavItem>
              
              <NavItem >
                <NavLink style={{color:"lightgrey"}} href="#formation">Formation</NavLink>
              </NavItem>

              <NavItem>
                <NavLink  style={{color:"lightgrey"}} href="#projets">Projets</NavLink>
              </NavItem>
            
              <NavItem>
                <NavLink style={{color:"lightgrey"}}  href="#stack">Stack</NavLink>
              </NavItem>

              <NavItem>
                <NavLink  style={{color:"lightgrey"}} href="#certificat">Certificats</NavLink>
              </NavItem>

              <NavItem>
                <NavLink  style={{color:"lightgrey"}} href="#footer">Contact</NavLink>
              </NavItem>
            
            </Nav>
          </Collapse>
      </ReactstrapNavbar>
    </div>
  );
};

export default NavbarComponent;
