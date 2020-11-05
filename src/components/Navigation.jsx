import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";
import logo from "../assets/Original on Transparent just logo.png";

const NavBarMobile = () => {
  return (
    <MDBNavbar color="white" dark expand="md" className="nav" fixed="top">
      <MDBNavbarBrand href="/">
        <img src={logo} alt="logo" height="30" />
      </MDBNavbarBrand>
      <MDBNavItem className="ml-auto">
        <MDBNavLink to="/mobileMenu">
          <MDBIcon icon="bars" className="black-text" size="lg" />
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbar>
  );
};

export default NavBarMobile;
