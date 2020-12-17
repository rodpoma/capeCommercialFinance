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
                        src="https://media.istockphoto.com/photos/bottles-on-conveyor-belt-in-factory-picture-id641361088?k=6&m=641361088&s=612x612&w=0&h=UY0yHgZNIcK1zniM3P5r8ReYJbEzFglNpJgmiwxJjpg="
                        alt="drinkProcessor"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src="https://media.istockphoto.com/photos/drink-cans-on-the-production-lines-picture-id875632154?k=6&m=875632154&s=612x612&w=0&h=7VsrWswL3-ra0VW0MXH3JhKWiGB7PJ3EN659Pxxc2Mg="
                        alt="foodProcessor"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src="https://media.istockphoto.com/photos/industrial-new-factory-modern-machines-picture-id664213136?k=6&m=664213136&s=612x612&w=0&h=Ky5naCSOnMD4q-He19e0ohR-wstswdymkczDXZDiEUY="
                        alt="plasticInjection"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src="https://media.istockphoto.com/photos/production-line-of-plastic-industry-picture-id510162486?k=6&m=510162486&s=612x612&w=0&h=BcECtLxFTWjm_dSZ9GCy5KftmXAuddew1Ium-pCOeYk="
                        alt="plasticInjection"
                        className="hpImage"
                      />
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src="https://media.istockphoto.com/photos/laser-cutting-of-metal-modern-industrial-technology-small-depth-of-picture-id1006017064?k=6&m=1006017064&s=612x612&w=0&h=sLM05HCuORpneaJyqNrUz3UID_SBR8-GMLLajPGIAb4="
                        alt="cnc1"
                        className="hpImage"
                      />
                      <MDBMask className="flex-center">
                        <p className="white-text">Zoom effect</p>
                      </MDBMask>
                    </MDBView>
                  </MDBCard>
                  <MDBCard className="individualCards">
                    <MDBView hover zoom>
                      <MDBCardImage
                        src="https://media.istockphoto.com/photos/machining-center-cutting-mold-picture-id1130518026?k=6&m=1130518026&s=612x612&w=0&h=ASE2fykpJXsJcnFCytdWXjHyVTwxeQSaaM2nHPaBkEU="
                        alt="cnc2"
                        className="hpImage"
                      />
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
