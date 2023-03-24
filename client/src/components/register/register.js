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
import { useNavigate } from "react-router";
import validator from "validator";
import 'react-toastify/dist/ReactToastify.css';
import { regexPassword } from "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/utils.js";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  // const [birthday, setBirthday] = useState(new Date());
  const navigate = useNavigate();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    status: "",
    occupation: "",
    location: "",
    birthday: "",
    auth_level: "basic"
  });
  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    password: false,
    status: false,
    occupation: false,
    location: false,
    birthday: false,
    auth_level: "basic",
    fetchError: false,
    fetchErrorMsg: "",
  });

  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
    switch (fieldName) {
      case "first_name":
        currValue === values.first_name
          ? setErrors({ ...errors, first_name: true })
          : setErrors({ ...errors, first_name: false });
        break;

      case "last_name":
        currValue === values.last_name
          ? setErrors({ ...errors, last_name: true })
          : setErrors({ ...errors, last_name: false });
        break;

      case "email":
        validator.isEmail(currValue)
          ? setErrors({ ...errors, email: false })
          : setErrors({ ...errors, email: true });
        break;

      case "password":
        regexPassword.test(currValue)
          ? setErrors({ ...errors, password: false })
          : setErrors({ ...errors, password: true });
        break;

    case "status":
          currValue === values.status
            ? setErrors({ ...errors, status: false })
            : setErrors({ ...errors, status: true });
          break;


      case "occupation":
        currValue === values.occupation
          ? setErrors({ ...errors, occupation: false })
          : setErrors({ ...errors, occupation: true });
        break;

      case "location":
        currValue === values.location
          ? setErrors({ ...errors, location: false })
          : setErrors({ ...errors, location: true });
        break;

      case "birthday":
        currValue === values.birthday
          ? setErrors({ ...errors, birthday: false })
          : setErrors({ ...errors, birthday: true });
        break;

    case "auth_level":
        currValue === values.auth_level
          ? setErrors({ ...errors, auth_level: false })
          : setErrors({ ...errors, auth_level: true });
        break;
    }
    setValues({ ...values, [fieldName]: event.target.value });
  };

 
 
    const handleSubmit = async (event) => {
      event.preventDefault();

      try {
      
        const res = await fetch("http://localhost:3004/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            status: values.status,
            occupation: values.occupation,
            location: values.location,
            birthday: values.birthday,
            auth_level: "basic"
          }),
        });

        if (!res.ok) {
          const error = await res.json();
          return setErrors({
            ...errors,
            fetchError: true,
            fetchErrorMsg: error.msg,
          });
        }

        const data = await res.json();
        console.log(data)
////////////////////////////
 /////Toasters/////
 ///////////////////////
//  if (res.msg === 'Agent created') {
//   toast.success("Success: Loading Agent Info...", {position:toast.POSITION.TOP_CENTER, theme: 'colored', autoClose: 5000, onClose: ()=>{navigate("/Agentlist") }})
// }
if (res.msg === 'Add all data') {
    toast.error("Error: Must add all data flieds", {position:toast.POSITION.TOP_CENTER, theme: 'dark', autoClose: 5000, onClose: ()=>{navigate("/")}})
  
  }
if (res.msg === 'user already exist') {
    toast.error("Error: User already exsists", {position:toast.POSITION.TOP_CENTER, theme: 'dark', autoClose: 5000, onClose: ()=>{navigate("/")}})
  
  }
  
 ////////////////////////////////////////////////////////
        setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg: data.msg,
        });
        setValues({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          status: "",
          occupation: "",
          location: "",
          birthday: "",
          auth_level: "basic"
        });
        // return
      } catch (error) {
        setErrors({
          ...errors,
          fetchError: true,
          fetchErrorMsg:
            "There was a problem with our server, please try again later",
        });
      }

      navigate('/')
     
    };
 

  return (
    // this div is centering the register page between the two nav bars with css
    <div className="register">
    <ToastContainer/>
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

            <MDBRow 
            //  onSubmit={handleSubmit}
             component="form">
              <MDBCol col="6">
                <MDBInput
                  component="form"
                  wrapperClass="mb-4"
                  label="First name"
                  id="form1"
                  type="text"
                  defaultValue={values.first_name}
                  onChange={handleChange("first_name")}
                  // error={errors.first_name}
                  // error={first_name ? values: undefined}
                  // helperText={errors.first_name && "Must enter first name"}
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Last name"
                  id="form2"
                  type="text"
                  defaultValue={values.last_name}
                  onChange={handleChange("last_name")}
                  // error={errors.last_name}
                  // helperText={errors.last_name && "Must enter last name"}
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
                  defaultValue={values.email}
                  onChange={handleChange("email")}
                  // error={errors.email}
                  // helperText={
                    // errors.email && "Please insert a valid email address"
                  // }
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  defaultValue={values.password}
                  onChange={handleChange("password")}
                  // error={errors.password}
                  // helperText={errors.email &&
                  //   "Password must be at least 8 characters, have one symbol, 1 uppercase letter, 1 lowercase and 1 digit"
                  // }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Occupation"
                  id="form7"
                  type="text"
                  defaultValue={values.occupation}
                  onChange={handleChange("occupation")}
                  // error={errors.occupation}
                  // helperText={errors.occupation && "Must enter an occupation"}
                />
              </MDBCol>

              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Location"
                  id="form6"
                  type="text"
                  defaultValue={values.location}
                  onChange={handleChange("location")}
                  // error={errors.location}
                 
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol col="6">
              <MDBInput
                  wrapperClass="mb-4"
                  label="birthday"
                  id="form5"
                  type="text"
                  defaultValue={values.birthday}
                  onChange={handleChange("birthday")}
                  // error={errors.birthday}
               
                />
                {/* <DatePicker
                  onChange={(date) => setValues(birthday(date))}
                  setBirthday={setBirthday("birthday")}
                   defaultValue={value.birthday}
                  error={errors.birthday}
                 
                > */}
                  <MDBInput
                  wrapperClass="mb-4"
                  label="status"
                  id="form9"
                  type="text"
                  defaultValue={values.status}
                  onChange={handleChange("status")}
                  // error={errors.birthday}
               
                />
                 {/* <MDBInput
                  wrapperClass="mb-4"
                  label="auth_level"
                  id="form8"
                  type="text"
                  value={values.status}
                  onChange={handleChange("auth_level")}
                  // error={errors.birthday}
               
                /> */}

              </MDBCol>

              <MDBCol col="6">
                <MDBBtn
                  className=" btn btn-outline-dark btn-lg"
                  
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </MDBBtn>
             
              </MDBCol>
            </MDBRow>
            <br />
            <br />
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <MDBBtn outline className="mx-2" color="dark" href="/">
                Login Here
              </MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Register;
