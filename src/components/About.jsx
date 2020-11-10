import React from "react";
import {MDBAnimation, MDBContainer} from "mdbreact";
import MediaQuery from "react-responsive";

const About = () => {
  return (
    <MDBContainer className="cards">
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h2 className="white-text text-center">About</h2>
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBAnimation type="fadeIn" delay=".6s">
          <p
            className="white-text text-center"
            style={{margin: "2.5% 10% 2.5% 10%"}}
          >
            Cape is an Independent Equipment Financing Company, with more than
            25 years of experience in delivering financing programs for
            manufacturers and supporting PE Owned and Sponsored businesses with
            their equipment financing needs.
          </p>
        </MDBAnimation>
      </MediaQuery>
      {/*Web Broswer */}
      <MediaQuery minDeviceWidth={1201}>Howdy</MediaQuery>
    </MDBContainer>
  );
};

export default About;
