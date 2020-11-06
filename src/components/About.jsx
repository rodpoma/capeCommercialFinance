import React from "react";
import {MDBAnimation, MDBContainer} from "mdbreact";

const About = () => {
  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeIn" delay=".3s">
        <h2 className="white-text text-center">About</h2>
      </MDBAnimation>
      <hr className="hr-light my-4 w-75" />
      <MDBAnimation type="fadeIn" delay=".6s">
        <p
          className="white-text text-center"
          style={{margin: "2.5% 10% 2.5% 10%"}}
        >
          Cape is an Independent Equipment Financing Company, with more than 25
          years of experience in delivering financing programs for manufacturers
          and supporting PE Owned and Sponsored businesses with their equipment
          financing needs.
        </p>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default About;
