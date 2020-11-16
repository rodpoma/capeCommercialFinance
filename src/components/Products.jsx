import React from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBNavLink,
  MDBBtn,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardGroup,
} from "mdbreact";
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
      <MediaQuery minDeviceWidth={1201}>
        <MDBCardGroup>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">PE Owned Businesses</MDBCardTitle>
              <MDBCardText>
                <p>
                  As an Independent equipment finance company, our focus is on
                  providing capital to Private Equity Owned and Sponsored
                  businesses to purchase equipment. In-addition we can Sale
                  Lease Back, existing equipment, releasing liquidity for
                  additional investments.
                  <br /> Cape focuses on EBITDA as a measurement, not the more
                  historical measurement of pre-tax profit driven by traditional
                  bank leasing companies.
                  <br /> If your business is private, non-rated, middle-market
                  we can help assist you in financing:
                  <br />
                  - New equipment purchases.
                  <br />
                  - Credit lines for future equipment needs.
                  <br />- Recapitalizations of existing equipment.
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Vendor Finance</MDBCardTitle>
              <MDBCardText>
                Cape provides financing programs to equipment manufacturers. As
                an Independent we are able to support your customers across the
                credit spectrum and transaction size, this allows manufacturers
                to partner with one financing sources rather than several. By
                partnering with Cape, manufacturers are able to access different
                customer financing products.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Products;
