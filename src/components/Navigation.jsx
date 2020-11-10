import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavLink,
  MDBNavItem,
} from "mdbreact";
import MediaQuery from "react-responsive";
import logo from "../assets/Original on Transparent just logo.png";
import logoBig from "../assets/Original on Transparent black text.png";

const NavBarMobile = () => {
  return (
    <>
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBNavbar color="white" dark expand="md" className="nav" fixed="top">
          <MDBNavbarBrand href="/" className="m-auto">
            {/*mr-auto or ml-auto will justify to right or left*/}
            <img src={logo} alt="logo" height="30" />
          </MDBNavbarBrand>
        </MDBNavbar>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBNavbar color="white" dark expand="md" className="nav" fixed="top">
          <MDBNavbarBrand href="/" className="mr-auto">
            <img src={logoBig} alt="logo" height="80" />
          </MDBNavbarBrand>
          <MDBNavbarNav className="webNav" right>
            <MDBNavItem className="webNavItem">
              <MDBNavLink to="/about">
                <h4 className="red-text bold">About</h4>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="webNavItem">
              <MDBNavLink to="/contact">
                <h4 className="red-text bold">Contact</h4>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="webNavItem">
              <MDBNavLink to="/products">
                <h4 className="red-text bold">Products</h4>
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
      </MediaQuery>
    </>
  );
};

export default NavBarMobile;
