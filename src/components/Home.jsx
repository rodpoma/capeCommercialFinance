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
  MDBCardGroup,
  MDBCardImage,
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
            <MDBAnimation type="fadeIn" delay=".6s" className="flex-center">
              <em>
                <p
                  className="white-text text-center"
                  style={{margin: "2.5% 10% 2.5% 10%"}}
                >
                  An Independent Equipment Financing Company, whose principal
                  has more than 25 years of experience in equipment financing.
                  Including vendor programs, municipal lending energy financing,
                  and direct large ticket structured solutions.
                </p>
              </em>
            </MDBAnimation>
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
                  An Independent Equipment Financing Company, whose principal
                  has more than 25 years of experience in equipment financing.
                  Including vendor programs, municipal lending energy financing,
                  and direct large ticket structured solutions.
                </p>
              </em>
            </MDBContainer>
            <hr className="hr-light my-5 w-75" />
            <MDBContainer className="hpImages" fluid>
              <MDBCardGroup className="mt-5">
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/bottles-on-conveyor-belt-in-factory-picture-id641361088?k=6&m=641361088&s=612x612&w=0&h=UY0yHgZNIcK1zniM3P5r8ReYJbEzFglNpJgmiwxJjpg="
                    alt="drinkProcessor"
                    className="hpImage"
                  />
                </MDBCard>
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/drink-cans-on-the-production-lines-picture-id875632154?k=6&m=875632154&s=612x612&w=0&h=7VsrWswL3-ra0VW0MXH3JhKWiGB7PJ3EN659Pxxc2Mg="
                    alt="foodProcessor"
                    className="hpImage"
                  />
                </MDBCard>
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/industrial-new-factory-modern-machines-picture-id664213136?k=6&m=664213136&s=612x612&w=0&h=Ky5naCSOnMD4q-He19e0ohR-wstswdymkczDXZDiEUY="
                    alt="plasticInjection"
                    className="hpImage"
                  />
                </MDBCard>
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/production-line-of-plastic-industry-picture-id510162486?k=6&m=510162486&s=612x612&w=0&h=BcECtLxFTWjm_dSZ9GCy5KftmXAuddew1Ium-pCOeYk="
                    alt="plasticInjection"
                    className="hpImage"
                  />
                </MDBCard>
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/laser-cutting-of-metal-modern-industrial-technology-small-depth-of-picture-id1006017064?k=6&m=1006017064&s=612x612&w=0&h=sLM05HCuORpneaJyqNrUz3UID_SBR8-GMLLajPGIAb4="
                    alt="cnc1"
                    className="hpImage"
                  />
                </MDBCard>
                <MDBCard>
                  <MDBCardImage
                    src="https://media.istockphoto.com/photos/machining-center-cutting-mold-picture-id1130518026?k=6&m=1130518026&s=612x612&w=0&h=ASE2fykpJXsJcnFCytdWXjHyVTwxeQSaaM2nHPaBkEU="
                    alt="cnc2"
                    className="hpImage"
                  />
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
