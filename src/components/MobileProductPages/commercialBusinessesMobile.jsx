import React, {useState} from "react";
import {MDBContainer, MDBAnimation, MDBBtn, MDBNavLink} from "mdbreact";

const CommercialBusinessesMobile = () => {
  const [page, setPage] = useState("one");
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInLeft" delay=".3s">
        <h3 className="white-text text-center" style={{fontSize: "7vw"}}>
          Commercial Business
        </h3>
        <hr className="hr-light my-3" />
      </MDBAnimation>
      <MDBAnimation type="fadeInLeft" delay=".6s">
        {page === "one" ? (
          <p
            className="white-text text-left"
            style={{margin: "2.5% 10% 2.5% 10%", fontSize: "3.5vw"}}
          >
            As an <em>Independent</em> equipment finance company, our focus is
            on supporting CAPEX needs for Private Equity Owned/Sponsoered
            business and Privately held organizations. We support customers'
            equipment needs with solutions ranging from re-capitalization of
            existing equipment using a sale-leaseback structure, to credit lines
            for new equipment purchase, to project financing needs, Cape has the
            required expertise to deliver for each of these needs.
          </p>
        ) : (
          <p
            className="white-text text-left"
            style={{margin: "2.5% 10% 2.5% 10%", fontSize: "3.5vw"}}
          >
            Our typical direct customer is:
            <ul>
              <li>Highly leveraged</li>
              <li>EBITDA positive</li>
              <li>
                Looking to add an equipment solution to their business to either
                generate top-line growth or reduce OPEX, sometimes even both
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
        )}
        <MDBContainer className="mobileBtns">
          {page === "one" ? (
            <MDBBtn color="danger" size="sm" onClick={() => setPage("two")}>
              Next
            </MDBBtn>
          ) : (
            <MDBBtn color="danger" size="sm" onClick={() => setPage("one")}>
              Previous
            </MDBBtn>
          )}
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

export default CommercialBusinessesMobile;
