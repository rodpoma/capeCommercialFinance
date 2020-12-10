import React, {useState} from "react";
import {MDBContainer, MDBAnimation, MDBNavLink, MDBBtn} from "mdbreact";

const RecentTransactions = () => {
  const [page, setPage] = useState(1);
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInLeft" delay=".3s">
        <h3 className="white-text text-center">Recent Transactions</h3>
        <hr className="hr-light my-2 w-75" />
      </MDBAnimation>
      <MDBAnimation type="fadeInLeft" delay=".6s">
        {page === 1 ? (
          <div
            className="white-text text-left mt-4 mb-4"
            style={{margin: "2.5% 10% 2.5% 10%"}}
          >
            <h4>$6,700,000 for New Machine Tools</h4>
            <ul>
              <li>AeroSpace & Defense Supplier</li>
              <li>COVID-19 Impacted Financial Performance</li>
              <li>48 Month $1 buyout lease</li>
            </ul>
          </div>
        ) : page === 2 ? (
          <div
            className="white-text text-left mt-4 mb-4"
            style={{margin: "2.5% 10% 2.5% 10%"}}
          >
            <h4>$3,500,000 for New Plastic Injection Molding Machine</h4>
            <ul>
              <li>Recent Start-Up</li>
              <li>Required additional collateral and personal guaranty</li>
              <li>36 Month $1 buyout lease</li>
            </ul>
          </div>
        ) : (
          <div
            className="white-text text-left mt-4 mb-4"
            style={{margin: "2.5% 10% 2.5% 10%"}}
          >
            <h4>$2,000,000 for Food Production Equipment</h4>
            <ul>
              <li>Recent Start-Up</li>
              <li>Required additional collateral and personal guaranty</li>
              <li>36 Month $1 buyout lease</li>
            </ul>{" "}
          </div>
        )}

        <MDBContainer className="mobileBtns">
          {page < 3 && (
            <MDBBtn color="danger" onClick={() => setPage(page + 1)}>
              Next
            </MDBBtn>
          )}
          {page > 1 && (
            <MDBBtn color="danger" onClick={() => setPage(page - 1)}>
              Previous
            </MDBBtn>
          )}
          <MDBNavLink to="/products">
            <MDBBtn color="danger">Back to Products</MDBBtn>
          </MDBNavLink>
        </MDBContainer>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default RecentTransactions;
