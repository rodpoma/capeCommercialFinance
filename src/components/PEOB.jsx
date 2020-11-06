import React from "react";
import {MDBAnimation, MDBContainer, MDBNavLink, MDBBtn} from "mdbreact";

const PEOB = () => {
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text text-center">PE Owned Businesses</h3>
      </MDBAnimation>
      <hr className="hr-light my-4 w-75" />
      <MDBAnimation type="fadeIn" delay=".6s">
        <p className="white-text text-left" style={{margin: "2.5% 2.5%"}}>
          As an Independent equipment finance company, our focus is on providing
          capital to Private Equity Owned and Sponsored businesses to purchase
          equipment. In-addition we can Sale Lease Back, existing equipment,
          releasing liquidity for additional investments.
          <br /> Cape focuses on EBITDA as a measurement, not the more
          historical measurement of pre-tax profit driven by traditional bank
          leasing companies.
          <br /> If your business is private, non-rated, middle-market we can
          help assist you in financing:
          <br />
          - New equipment purchases.
          <br />
          - Credit lines for future equipment needs.
          <br />- Recapitalizations of existing equipment.
        </p>
      </MDBAnimation>
      <MDBNavLink className="mobile-link" to="/products">
        <MDBAnimation type="fadeIn" delay="1.2s">
          <MDBBtn outline rounded color="white">
            Back
          </MDBBtn>
        </MDBAnimation>
      </MDBNavLink>
    </MDBContainer>
  );
};

export default PEOB;
