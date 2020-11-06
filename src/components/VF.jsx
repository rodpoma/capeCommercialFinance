import React from "react";
import {MDBAnimation, MDBContainer, MDBNavLink, MDBBtn} from "mdbreact";

const VF = () => {
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeIn" delay=".3s">
        <h2 className="white-text text-center">Vendor finance</h2>
      </MDBAnimation>
      <hr className="hr-light my-4 w-75" />
      <MDBAnimation type="fadeIn" delay=".6s">
        <p
          className="white-text text-center"
          style={{margin: "2.5% 10% 2.5% 10%"}}
        >
          Cape provides financing programs to equipment manufacturers. As an
          Independent we are able to support your customers across the credit
          spectrum and transaction size, this allows manufacturers to partner
          with one financing sources rather than several. By partnering with
          Cape, manufacturers are able to access different customer financing
          products.
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

export default VF;
