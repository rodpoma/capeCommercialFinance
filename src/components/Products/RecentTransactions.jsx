import React from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
} from "mdbreact";

const RecentTransactions = () => {
  return (
    <MDBContainer className="mt-1" fluid>
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">Recent Transactions</h3>
        <MDBContainer className="sepCards" fluid>
          <MDBCard className="individualCards">
            <MDBCardImage
              src="https://media.istockphoto.com/photos/laser-cutting-of-metal-modern-industrial-technology-small-depth-of-picture-id1006017064?k=6&m=1006017064&s=612x612&w=0&h=sLM05HCuORpneaJyqNrUz3UID_SBR8-GMLLajPGIAb4="
              alt="MachineTools"
              top
              hover
              overlay="white-slight"
              className="cardImage"
            />
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
          <MDBCard className="individualCards">
            <MDBCardImage
              src="https://media.istockphoto.com/photos/production-line-of-plastic-industry-picture-id510162486?k=6&m=510162486&s=612x612&w=0&h=BcECtLxFTWjm_dSZ9GCy5KftmXAuddew1Ium-pCOeYk="
              alt="plasticInjectionMachine"
              top
              hover
              overlay="white-slight"
              className="cardImage"
            />
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
          <MDBCard className="individualCards">
            <MDBCardImage
              src="https://media.istockphoto.com/photos/drink-cans-on-the-production-lines-picture-id875632154?k=6&m=875632154&s=612x612&w=0&h=7VsrWswL3-ra0VW0MXH3JhKWiGB7PJ3EN659Pxxc2Mg="
              alt="foodProcessor"
              top
              hover
              overlay="white-slight"
              className="cardImage"
            />
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
        </MDBContainer>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default RecentTransactions;
