import React from "react";
import {MDBContainer, MDBAnimation, MDBNavLink, MDBBtn} from "mdbreact";

const EnergyFinanceMobile = () => {
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeInLeft" delay=".3s">
        <h3 className="white-text text-center" style={{fontSize: "7vw"}}>
          Energy Finance
        </h3>
        <hr className="hr-light my-2 w-75" />
      </MDBAnimation>
      <MDBAnimation type="fadeInLeft" delay=".6s">
        <p
          className="white-text text-left"
          style={{margin: "2.5% 10% 2.5% 10%", fontSize: "3.5vw"}}
        >
          Our experience in distributed Energy Finance goes back more than a
          decade, we have significant experience in financing projects using a
          lease, loan, and equity to fund the following projects. Our typical
          approach is to partner with project developers.
          <br />
          <br />
          <ul>
            <li>Solar: Power Purchase Agreement</li>
            <li>CoGen: Energy Services Agreement</li>
            <li>Energy Savings</li>
            <li>Energy Storage</li>
            <li>Fuel Cells</li>
          </ul>
          Cape does provide Financing for the construction of these projects,
          which can typically run from 3 to 18 months.
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

export default EnergyFinanceMobile;
