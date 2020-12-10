import React from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardGroup,
  MDBCardImage,
} from "mdbreact";

const EnergySolutions = () => {
  return (
    <MDBContainer className="mt-1">
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">Energy Finance</h3>
        <MDBCardGroup className="mt-1">
          <MDBCard>
            <MDBCardImage
              src="https://get.pxhere.com/photo/sun-technology-energy-solar-panel-save-durable-solar-power-solar-energy-solar-panels-arouse-893490.jpg"
              alt="Energy Infrastructure"
              top
              hover
              overlay="white-slight"
            />
          </MDBCard>
          <MDBCard>
            <MDBCardBody className="productCard">
              <MDBCardText>
                Our experience in distributed Energy Finance goes back more than
                a decade, we have significant experience in financing projects
                using a lease, loan, and equity to fund the following projects.
                Our typical approach is to partner with project developers.
                <br />
                <br />
                <ul>
                  <li>Solar: Power Purchase Agreement</li>
                  <li>CoGen: Energy Services Agreement</li>
                  <li>Energy Savings</li>
                  <li>Energy Storage</li>
                  <li>Fuel Cells</li>
                </ul>
                Cape does provide Financing for the construction of these
                projects, which can typically run from 3 to 18 months.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default EnergySolutions;
