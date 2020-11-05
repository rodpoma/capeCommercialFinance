import React from "react";
import {
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBAnimation,
} from "mdbreact";

const MobileMenu = () => {
  return (
    <MDBContainer fluid>
      <MDBNav className="mobileMenu">
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/about">
            <MDBAnimation type="fadeIn" delay=".3s">
              <MDBBtn outline rounded color="white">
                About
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/products">
            <MDBAnimation type="fadeIn" delay=".6s">
              <MDBBtn outline rounded color="white">
                Products
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink className="mobile-link" to="/contact">
            <MDBAnimation type="fadeIn" delay=".9s">
              <MDBBtn outline rounded color="white">
                Contact
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
    </MDBContainer>
  );
};

export default MobileMenu;
