import React from "react";
import {MDBAnimation, MDBContainer, MDBNavLink, MDBBtn} from "mdbreact";
import MediaQuery from "react-responsive";

const Products = () => {
  return (
    <MDBContainer className="cards">
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h2 className="white-text text-center">Products</h2>
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBContainer className="mobileMenu">
          <MDBNavLink className="mobile-link" to="/products-PEOB">
            <MDBAnimation type="fadeIn" delay=".9s">
              <MDBBtn outline rounded color="white">
                PE Owned Businesses
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
          <MDBNavLink className="mobile-link" to="/products-VF">
            <MDBAnimation type="fadeIn" delay="1.2s">
              <MDBBtn outline rounded color="white">
                Vendor Finance
              </MDBBtn>
            </MDBAnimation>
          </MDBNavLink>
        </MDBContainer>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>Howdy</MediaQuery>
    </MDBContainer>
  );
};

export default Products;
