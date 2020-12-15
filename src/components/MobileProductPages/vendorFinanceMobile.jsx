import React from "react";
import {MDBContainer, MDBAnimation, MDBBtn, MDBNavLink} from "mdbreact";

const VendorFinanceMobile = () => {
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInLeft" delay=".3s">
        <h3 className="white-text text-center" style={{fontSize: "7vw"}}>
          Vendor Finance
        </h3>
        <hr className="hr-light my-2 w-75" />
      </MDBAnimation>
      <MDBAnimation type="fadeInLeft" delay=".6s">
        <p
          className="white-text text-left"
          style={{margin: "2.5% 10% 2.5% 10%", fontSize: "3.5vw"}}
        >
          Cape provides financing programs to equipment manufacturers to help
          sell more products, increase average sale price and accelerate the
          closing process. As an independent, we can support your customers,
          across the credit spectrum and transaction size, giving manufacturers
          the ability to partner with just one financing source.
          <br />
          Our partners are manufacturers with equipment sales starting at $50M,
          a segment often ignored by large bank-owned equipment leasing
          organizations.
          <br />
          Cape can provide Application Only programs up to $350,000 and
          Full-Financial progrmas for transactions beyond $10,000,000.
        </p>
        <MDBContainer className="mobileBtns">
          <MDBNavLink to="/products">
            <MDBBtn color="danger" size="sm">
              Back to Products
            </MDBBtn>
          </MDBNavLink>
        </MDBContainer>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default VendorFinanceMobile;
