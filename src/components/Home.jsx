import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
  MDBAnimation,
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardText,
  MDBCardBody,
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
            <em>
              <p
                className="white-text text-center"
                style={{margin: "2.5% 10% 2.5% 10%"}}
              >
                An Independent Equipment Financing Company, with more than 25
                years of experience in delivering financing programs for
                manufacturers and supporting PE Owned and Sponsored businesses
                with their equipment financing needs.
              </p>
            </em>
            <MDBNav className="mobileMenu">
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
          <MDBAnimation type="fadeIn" delay=".6s">
            <img
              src={logo}
              alt="logo"
              className="logo"
              style={{width: "50vw"}}
            />

            <MDBContainer>
              <em>
                <p className="white-text my-5">
                  An Independent Equipment Financing Company, with more than 25
                  years of experience in delivering financing programs for
                  manufacturers and supporting PE Owned and Sponsored businesses
                  with their equipment financing needs.
                </p>
              </em>
            </MDBContainer>
            <hr className="hr-light my-5 w-75" />
            <MDBContainer className="mt-5">
              <h2 className="white-text">Recent Transactions</h2>
              <MDBCardGroup className="mt-5">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle className="black-text" tag="h5">
                      $6,700,000 for New Machine Tools
                    </MDBCardTitle>
                    <MDBCardText>
                      <br />
                      -AeroSpace & Defense Supplier
                      <br /> -COVID-19 Impacted Financial Performance
                      <br /> -48 Month $1 buyout lease
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle className="black-text" tag="h5">
                      $3,500,000 for New Plastic Injection Molding Machine
                    </MDBCardTitle>
                    <MDBCardText>
                      <br />
                      -Recent Start-Up
                      <br />
                      -Required additional collateral and personal guaranty
                      <br /> -36 Month $1 buyout lease
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle className="black-text" tag="h5">
                      $2,000,000 for Food Production Equipment
                    </MDBCardTitle>
                    <MDBCardText>
                      <br />
                      -Recent Acquisition
                      <br /> -Debt 6X EBITDA
                      <br /> -36 Month $1 buyout lease
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCardGroup>
            </MDBContainer>
          </MDBAnimation>
        </MDBCol>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Landing;
