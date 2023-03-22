import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link as RouterLink } from "react-router-dom";
import DatePicker from "react-date-picker";

import { useState } from "react";

function Register() {
  const [value, onChange] = useState(new Date());
  return (
    // this div is centering the register page between the two nav bars with css 
    <div className="register">
      <MDBContainer fluid>
        <div
          className="p-4 bg-image"
          style={{
            backgroundImage:
              "url(https://s3.envato.com/files/b6d73684-463e-4397-983b-5bd6b725d482/inline_image_preview.jpg)",
            height: "860px",
          }}
        ></div>

        <MDBCard
          className="mx-5 mb-5 p-5 shadow-5"
          style={{
            marginTop: "-800px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <MDBCardBody className="p-1 text-center">
            <h2 className="fw-bold mb-5">Register Here</h2>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="First name"
                  id="form1"
                  type="text"
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="form2"
                  type="text"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Occupation"
                  id="form3"
                  type="email"
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Location"
                  id="form4"
                  type="password"
                />
              </MDBCol>
            </MDBRow>
          
            <MDBRow>
            <MDBCol col="6">
              Birthday
         ~
              <DatePicker onChange={onChange} value={value} />
              </MDBCol>
           
            <MDBCol col="6">
            <MDBBtn className=""  href="/" class="btn btn-outline-dark btn-lg">
              Sign Up
            </MDBBtn>
            </MDBCol>
            </MDBRow>
            <br />
            <br />
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className='mx-2' color='dark' href="/">
                Login Here
              </MDBBtn>
            </div>
            {/* <div className="text-center">
              <p className="ms-2">
                Already have an account?
                <br /> <br />{" "}
                <a href="/login" class="link-info">
                  Login here
                </a>
              </p>
            </div> */}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
