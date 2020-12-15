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

const PrivateEquityOwnedBusinesses = () => {
  return (
    <MDBContainer className="PEOB" fluid>
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">Commercial Businesses</h3>
        <MDBCardGroup className="mt-1">
          <MDBCard className="PEOBCard">
            <MDBCardBody className="productCard">
              <MDBCardText>
                <p className="cardText">
                  As an <em>Independent</em> equipment finance company, our
                  focus is on supporting CAPEX needs for Private Equity
                  Owned/Sponsoered business and Privately held organizations. We
                  support customers' equipment needs with solutions ranging from
                  re-capitalization of existing equipment using a sale-leaseback
                  structure, to credit lines for new equipment purchase, to
                  project financing needs, Cape has the required expertise to
                  deliver for each of these needs.
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="PEOBCard">
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2014/09/10/17/29/handshake-440959_960_720.jpg"
              alt="Business Handshake"
              top
              overlay="white-slight"
            />
          </MDBCard>
        </MDBCardGroup>
        <MDBCardGroup>
          <MDBCard className="PEOBCard">
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
              alt="Private Equity"
              top
              overlay="white-slight"
            />
          </MDBCard>
          <MDBCard className="PEOBCard">
            <MDBCardBody className="productCard">
              <MDBCardText>
                <p style={{fontSize: ".77vw"}}>
                  Our typical direct customer is:
                  <ul>
                    <li>Highly leveraged</li>
                    <li>EBITDA positive</li>
                    <li>
                      Looking to add an equipment solution to their business to
                      either generate top-line growth or reduce OPEX, sometimes
                      even both
                    </li>
                  </ul>
                  This is where Cape excels in providing debt solutions. If your
                  business is private, unrated, middle-market, or private
                  equity-owned, we can help assist you with financing:
                  <ul>
                    <li>New Equipment purchases</li>
                    <li>Credit lines for future equipment needs</li>
                    <li>Recapitilization of existing equipment</li>
                  </ul>
                </p>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default PrivateEquityOwnedBusinesses;
