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
  MDBCardImage,
  MDBView,
  MDBMask,
} from "mdbreact";
import logo from "../assets/Original on Transparent.png";
import MediaQuery from "react-responsive";
import DP from "../assets/DrinkProcessor.jpg";
import FP from "../assets/foodProcessor.jpg";
import PI1 from "../assets/plasticInjection1.jpg";
import PI2 from "../assets/plasticInjection2.jpg";
import CNC1 from "../assets/CNC1.jpg";
import CNC2 from "../assets/CNC22.jpg";

const Landing = () => {
  return (
    <MDBContainer className="EC" fluid>
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBContainer className="cards" fluid>
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
              <MDBAnimation type="fadeIn" delay=".6s" className="flex-center">
                <em>
                  <p
                    className="white-text text-center"
                    style={{margin: "0 5% 0 5%", fontSize: "3.75vw"}}
                  >
                    An Independent Equipment Financing Company, whose focus is
                    on delivering financing across several sectors, including to
                    mid and lower mid-market customers, customer financing
                    programs for industrial manufacturers, and structured
                    solutions to the distributed energy market.
                  </p>
                </em>
              </MDBAnimation>
              <MDBNav className="mobileMenu">
                <MDBNavItem>
                  <MDBNavLink to="/products">
                    <MDBAnimation type="fadeIn" delay="1.2s">
                      <MDBBtn rounded color="danger">
                        Products
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contact">
                    <MDBAnimation type="fadeIn" delay="1.5s">
                      <MDBBtn rounded color="danger">
                        Contact
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
          </MDBCol>
        </MDBContainer>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBContainer className="comps" fluid>
          <MDBCol className="white-text text-center mt-5">
            <MDBAnimation type="fadeIn" delay=".6s">
              <img
                src={logo}
                alt="logo"
                className="logo"
                style={{width: "50vw"}}
              />

              <MDBContainer fluid>
                <em>
                  <p className="about">
                    An Independent Equipment Financing Company, whose focus is
                    on delivering financing across several sectors, including to
                    mid and lower mid-market customers, customer financing
                    programs for industrial manufacturers, and structured
                    solutions to the distributed energy market.
                  </p>
                </em>
              </MDBContainer>
              <hr className="hr-light my-5 w-75" />
              <MDBContainer className="hpImages" fluid>
                <MDBContainer className="sepCards" fluid>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src={DP}
                        alt="drinkProcessor"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src={FP}
                        alt="foodProcessor"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src={PI1}
                        alt="plasticInjection"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src={PI2}
                        alt="plasticInjection"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage src={CNC1} alt="cnc1" className="hpImage" />
                      <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                      </MDBMask>
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage src={CNC2} alt="cnc2" className="hpImage" />
                    </MDBView>
                  </MDBCard>
                </MDBContainer>
              </MDBContainer>
            </MDBAnimation>
          </MDBCol>
        </MDBContainer>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Landing;
