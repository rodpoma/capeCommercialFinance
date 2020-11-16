import React from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardText,
  MDBCardBody,
} from "mdbreact";
import MediaQuery from "react-responsive";

const About = () => {
  return (
    <MDBContainer className="cards">
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h2 className="white-text text-center">About</h2>
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBAnimation type="fadeIn" delay=".6s">
          <p
            className="white-text text-center"
            style={{margin: "2.5% 10% 2.5% 10%"}}
          >
            Cape is an Independent Equipment Financing Company, with more than
            25 years of experience in delivering financing programs for
            manufacturers and supporting PE Owned and Sponsored businesses with
            their equipment financing needs.
          </p>
        </MDBAnimation>
      </MediaQuery>
      {/*Web Broswer */}
      <MediaQuery minDeviceWidth={1201}>
        <MDBContainer>
          <h1 className="white-text">About</h1>
          <p className="white-text">
            Cape is an Independent Equipment Financing Company, with more than
            25 years of experience in delivering financing programs for
            manufacturers and supporting PE Owned and Sponsored businesses with
            their equipment financing needs.
          </p>
        </MDBContainer>
        <MDBContainer className="mt-5">
          <h2 className="white-text">Recent Transactions</h2>
          <MDBCardGroup>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
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
                <MDBCardTitle tag="h5">
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
                <MDBCardTitle tag="h5">
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
      </MediaQuery>
    </MDBContainer>
  );
};

export default About;
