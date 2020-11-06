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
          swal("email sent!");
        },
        error => {
          console.log(error.text);
          swal("something went wrong!");
        }
      );
  }

  return (
    <MDBContainer className="cards">
      <MDBAnimation type="fadeIn" delay=".6s">
        <MDBCard>
          <MDBCardBody className="rgba-grey-light">
            <form onSubmit={sendEmail}>
              <p className="h5 text-center mb-4 black-text">Contact</p>
              <div className="black-text">
                <MDBInput
                  label="Name"
                  name="user_name"
                  group
                  type="text"
                  validate
                />
                <MDBInput
                  label="Email"
                  name="user_email"
                  group
                  type="email"
                  validate
                />
                <MDBInput
                  label="Subject"
                  name="subject"
                  group
                  type="text"
                  validate
                />
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
      </MDBAnimation>
    </MDBContainer>
  );
};

export default Contact;
