import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBAnimation,
} from "mdbreact";
import logo from "../assets/Original on Transparent.png";
import MediaQuery from "react-responsive";

const Landing = () => {
  return (
    <MDBContainer className="cards" fluid>
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBCol className="white-text text-center mt-5">
          <MDBAnimation type="fadeIn" delay=".6s" className="flex-center">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{width: "80vw"}}
            />
          </MDBAnimation>
          <hr className="hr-light my-4 w-75" />
          <MDBContainer fluid>
            <MDBNav className="mobileMenu">
              <MDBNavItem>
                <MDBNavLink className="mobile-link" to="/about">
                  <MDBAnimation type="fadeIn" delay=".9s">
                    <MDBBtn outline rounded color="white">
                      About
                    </MDBBtn>
                  </MDBAnimation>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="mobile-link" to="/products">
                  <MDBAnimation type="fadeIn" delay="1.2s">
                    <MDBBtn outline rounded color="white">
                      Products
                    </MDBBtn>
                  </MDBAnimation>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="mobile-link" to="/contact">
                  <MDBAnimation type="fadeIn" delay="1.5s">
                    <MDBBtn outline rounded color="white">
                      Contact
                    </MDBBtn>
                  </MDBAnimation>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </MDBContainer>
        </MDBCol>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBCol className="white-text text-center mt-5">
          <MDBAnimation type="fadeIn" delay=".6s" className="flex-center">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{width: "50vw"}}
            />
          </MDBAnimation>
          <hr className="hr-light my-5 w-50" />
        </MDBCol>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Landing;
