import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  
} from "mdbreact";

function Navbar() {
  return (
    <MDBNavbar
      color="blue"
//how to make background color to blue here?? //     
      
      expand="md"
      style={{ width: "100%" }}
    >
      <MDBNavbarBrand>
        <strong className="white-text">Stephen Dever</strong>
      </MDBNavbarBrand>
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/about">
          <strong className="white-text">About Me</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/portfolio">
          <strong className="white-text">Apps</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/resume">
          <strong className="white-text">Resume</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="waves-effect waves-light" to="/contact">
          <strong className="white-text">Contact</strong>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}

export default Navbar;
