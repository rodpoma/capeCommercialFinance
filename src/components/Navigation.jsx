import React from "react";
import {MDBNavbar, MDBNavbarBrand} from "mdbreact";
import logo from "../assets/Original on Transparent just logo.png";

const NavBarMobile = () => {
  return (
    <MDBNavbar color="white" dark expand="md" className="nav" fixed="top">
      <MDBNavbarBrand href="/" className="m-auto">
        {/*mr-auto or ml-auto will justify to right or left*/}
        <img src={logo} alt="logo" height="30" />
      </MDBNavbarBrand>
    </MDBNavbar>
  );
};

export default NavBarMobile;
