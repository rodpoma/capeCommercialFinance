import React from "react";
import {MDBCol, MDBContainer, MDBAnimation} from "mdbreact";
import logo from "../assets/Original on Transparent.png";

const Landing = () => {
  return (
    <MDBContainer className="cards" fluid>
      <MDBCol className="white-text text-center mt-5">
        <MDBAnimation type="fadeIn" delay=".6s" className="flex-center">
          <img src={logo} alt="logo" className="logo" style={{width: "80vw"}} />
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBAnimation type="fadeIn" delay="1.2s">
          <em>Where Dreams Come true</em>
        </MDBAnimation>
      </MDBCol>
    </MDBContainer>
  );
};

export default Landing;
