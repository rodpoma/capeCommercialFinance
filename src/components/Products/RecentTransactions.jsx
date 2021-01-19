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
import FP from "../../assets/foodProcessor.jpg";
import PI2 from "../../assets/plasticInjection2.jpg";
import CNC1 from "../../assets/CNC1.jpg";

const RecentTransactions = () => {
  return (
    <MDBContainer className="mt-1" fluid>
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">Recent Transactions</h3>
        <MDBContainer className="sepCards" fluid>
          <MDBCard className="individualCards">
            <MDBCardImage
              src={CNC1}
              alt="MachineTools"
              top
              hover
              overlay="white-slight"
              style={{height: "30vh"}}
            />
            <MDBCardBody>
              <MDBCardTitle className="black-text" tag="h5">
                $6,700,000 for New Machine Tools
              </MDBCardTitle>
              <MDBCardText style={{color: "black"}}>
                <br />
                -AeroSpace & Defense Supplier
                <br /> -COVID-19 Impacted Financial Performance
                <br /> -48 Month $1 buyout lease
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="individualCards">
            <MDBCardImage
              src={PI2}
              alt="plasticInjectionMachine"
              top
              hover
              overlay="white-slight"
              style={{height: "30vh"}}
            />
            <MDBCardBody>
              <MDBCardTitle className="black-text" tag="h5">
                $3,500,000 for New Plastic Injection Molding Machine
              </MDBCardTitle>
              <MDBCardText style={{color: "black"}}>
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
              src={FP}
              alt="foodProcessor"
              top
              hover
              overlay="white-slight"
              style={{height: "30vh"}}
            />
            <MDBCardBody>
              <MDBCardTitle className="black-text" tag="h5">
                $2,000,000 for Food Production Equipment
              </MDBCardTitle>
              <MDBCardText style={{color: "black"}}>
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
