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
import Handshake from "../../assets/handshake.jpg";
import Business from "../../assets/Business.JPG";

const PrivateEquityOwnedBusinesses = () => {
  return (
    <MDBContainer className="PEOB" fluid>
      <MDBAnimation type="fadeIn" delay=".3s">
        <h3 className="white-text">Commercial Businesses</h3>
        <MDBCardGroup className="mt-1">
          <MDBCard className="CardHeight">
            <MDBCardBody className="productCard">
              <MDBCardText>
                <p style={{fontSize: ".7vw", color: "black"}}>
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
          <MDBCard className="CardHeight">
            <MDBCardImage
              src={Handshake}
              alt="Business Handshake"
              top
              overlay="white-slight"
            />
          </MDBCard>
        </MDBCardGroup>
        <MDBCardGroup>
          <MDBCard className="CardHeight">
            <MDBCardImage
              src={Business}
              alt="Private Equity"
              top
              overlay="white-slight"
            />
          </MDBCard>
          <MDBCard className="CardHeight">
            <MDBCardBody className="productCard">
              <MDBCardText>
                <p style={{fontSize: ".7vw", color: "black"}}>
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
