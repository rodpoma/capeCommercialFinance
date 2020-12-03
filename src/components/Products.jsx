import React from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
  MDBCardGroup,
} from "mdbreact";
import MediaQuery from "react-responsive";

const Products = () => {
  return (
    <MDBContainer className="cards">
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h1 className="white-text text-center">Products</h1>
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBContainer className="mobileMenu">
          <MDBAnimation type="fadeIn" delay=".3s">
            <h4 className="white-text text-center">PE Owned Businesses</h4>
          </MDBAnimation>
          <MDBAnimation type="fadeIn" delay=".6s">
            <p className="white-text text-left" style={{margin: "2.5% 2.5%"}}>
              As an Independent equipment finance company, our focus is on
              providing capital to Private Equity Owned and Sponsored businesses
              to purchase equipment. In-addition we can Sale Lease Back,
              existing equipment, releasing liquidity for additional
              investments.
              <br /> Cape focuses on EBITDA as a measurement, not the more
              historical measurement of pre-tax profit driven by traditional
              bank leasing companies.
              <br /> If your business is private, non-rated, middle-market we
              can help assist you in financing:
              <br />
              - New equipment purchases.
              <br />
              - Credit lines for future equipment needs.
              <br />- Recapitalizations of existing equipment.
            </p>
          </MDBAnimation>
          <MDBAnimation type="fadeIn" delay=".3s">
            <h4 className="white-text text-center mt-5">
              Vendor finance - Customer Financing Solutions
            </h4>
          </MDBAnimation>
          <MDBAnimation type="fadeIn" delay=".6s">
            <p
              className="white-text text-left"
              style={{margin: "2.5% 10% 2.5% 10%"}}
            >
              Cape provides financing programs to equipment manufacturers. As an
              Independent we are able to support your customers across the
              credit spectrum and transaction size, this allows manufacturers to
              partner with one financing sources rather than several. By
              partnering with Cape, manufacturers are able to access different
              customer financing products.
            </p>
          </MDBAnimation>
        </MDBContainer>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h1 className="white-text">Products</h1>
          <hr className="hr-light my-4" />
          <MDBCardGroup>
            <MDBCard>
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
                    historical measurement of pre-tax profit driven by
                    traditional bank leasing companies.
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
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Vendor finance - Customer Financing Solutions
                </MDBCardTitle>
                <MDBCardText>
                  Cape provides financing programs to equipment manufacturers.
                  As an Independent we are able to support your customers across
                  the credit spectrum and transaction size, this allows
                  manufacturers to partner with one financing sources rather
                  than several. By partnering with Cape, manufacturers are able
                  to access different customer financing products.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCardGroup>
          <MDBContainer className="mt-5">
            <h3 className="white-text">Recent Transactions</h3>
            <hr className="hr-light my-4" />
            <MDBCardGroup className="mt-5">
              <MDBCard>
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
              <MDBCard>
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
              <MDBCard>
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
            </MDBCardGroup>
          </MDBContainer>
        </MDBAnimation>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Products;
