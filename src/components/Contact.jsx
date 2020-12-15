import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import MediaQuery from "react-responsive";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_SERVICE}`,
        `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then(
        result => {
          console.log(result.text);
          swal("Email sent!");
        },
        error => {
          console.log(error.text);
          swal("Something went wrong!");
        }
      );
  }
  return (
    <MDBContainer className="comps" fluid>
      <MDBAnimation type="fadeIn" delay=".6s">
        <MDBContainer className="w-75" fluid>
          <h2 className="white-text">Info</h2>
          <hr className="hr-light" />
          <h6 className="white-text mb-3">
            Phone:
            <br />
            <em>+1(917)-940-0239</em>
          </h6>
          <h6 className="white-text mb-3">
            E-mail:
            <br />
            <em>info@capecf.com</em>
          </h6>
          <h6 className="white-text mb-3">
            Address:
            <br />
            <em>
              Cape Commercial Finance, LLC 1301 Riverplace Blvd, Suite 800
              Jacksonville, FL32207
            </em>
          </h6>
        </MDBContainer>
        <MediaQuery minDeviceWidth={1201}>
          <MDBContainer className="w-75" fluid>
            <MDBCard>
              <MDBCardBody className="rgba-grey-light">
                <form onSubmit={sendEmail}>
                  <div className="black-text">
                    <MDBInput label="Name" name="user_name" type="text" />
                    <MDBInput label="Email" name="user_email" type="email" />
                    <MDBInput label="Subject" name="subject" type="text" />
                    <MDBInput
                      type="textarea"
                      name="message"
                      rows="2"
                      label="Message"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn outline color="black" type="submit">
                      Send
                      <MDBIcon far icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MediaQuery>
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Contact;
