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

const VendorFinance = () => {
  return (
    <MDBContainer className="mt-1" fluid>
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">
          Vendor Finance - Customer Financing Solutions
        </h3>
        <MDBCardGroup className="mt-1">
          <MDBCard>
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2014/07/06/13/55/calculator-385506_960_720.jpg"
              alt="Finance"
              top
              hover
              overlay="white-slight"
            />
          </MDBCard>
          <MDBCard>
            <MDBCardBody className="productCard">
              <MDBCardText>
                <p className="cardText">
                  Cape provides financing programs to equipment manufacturers to
                  help sell more products, increase average sale price and
                  accelerate the closing process. As an independent, we can
                  support your customers, across the credit spectrum and
                  transaction size, giving manufacturers the ability to partner
                  with just one financing source.
                  <br />
                  <br />
                  Our partners are manufacturers with equipment sales starting
                  at $50M, a segment often ignored by large bank-owned equipment
                  leasing organizations.
                  <br />
                  <br />
                  Cape can provide Application Only programs up to $350,000 and
                  Full-Financial progrmas for transactions beyond $10,000,000.
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default VendorFinance;
