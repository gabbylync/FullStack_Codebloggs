import React from "react";
import { useState, useEffect } from "react";
import { Form, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import useCookie from "react-use-cookie";
import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/login.css";
import { regexPassword } from "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/utils.js";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function Login() {
  const [userToken, setUserToken] = useCookie("token", "0");
  const navigate = useNavigate();
  
  const [values, setValues] = useState({
    email: "",
    password: "",
  showPassword: false
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    fetchError: false,
    fetchErrorMsg: "",
  });
 
  const [users, setUsers] = useState('poop');

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`http://localhost:3004/all-users`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let data = await response.json();
      setUsers(data);
      console.log("users:", data);
    }

    getUsers();

    return;
  }, []);


  const handleChange = (fieldName) => (event) => {
    const currValue = event.target.value;
    let isCorrectValue =
      fieldName === "email"
        ? validator.isEmail(currValue)
        : regexPassword.test(currValue);

    isCorrectValue
      ? setErrors({ ...errors, [fieldName]: false })
      : setErrors({ ...errors, [fieldName]: true });

    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    console.log('poop')
    try {
      const res = await fetch("http://localhost:3004/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
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

      // might need data in front of the session.token
      // setUserToken(data.Session.token);
      setUserToken(data.Session.token);
       console.log("userToken", userToken);

      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: data.msg,
      });
      setValues({
        email: "",
        password: "",
        showPassword: false,
      });
      // return
    } catch (error) {
      setErrors({
        ...errors,
        fetchError: true,
        fetchErrorMsg: "",
      });
    }

    let userEmailList = [];
    const list = users.map((user) => {
      userEmailList.push(user.email);
    });
    let foundPassword;

    let userpasswordList = [];
    const poop = users.map((user) => {
      userpasswordList.push(user.password);
    });


    userpasswordList.filter((password) => {
      if (password === values.password) {
        foundPassword = values.password;
      }
    });

    if (
      userEmailList.includes(values.email)&&
      foundPassword === values.password
    ) {
      toast.success("Success: loading home page...", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
        autoClose: 5000,
        onClose: () => {
          navigate("/home");
        },
      });
    } else 
    {
      toast.error("Error: Incorrect Email or Password", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
        autoClose: 5000,
        onClose: () => {
          navigate("/");
        },
     });
     
    }
  };

  return (
    // <div className='main'>
    <MDBContainer className=" my-4 gradient-form align-items-stretch">
      <MDBRow>
        <MDBCol col="6" className="loginleft">
          <div className="loginform">
            <div className="text-center">
              <img
                src="https://i.ibb.co/RBbJS4p/Code-Bloggs-graphic.png"
                style={{ width: "100px" }}
                alt="logo"
              />
              <br />
              <br />
              <h2 className="codeblogger">Welcome back Codeblogger</h2>
            </div>

            <p className="logintext">Please login to your account</p>
            <MDBInput
              className="logintext"
              wrapperClass="mb-4 email"
              label="Email address"
              id="form1"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              // error={errors.email}
              // helperText={errors.email && "Please insert a valid email address"}
             
            />
    
            <MDBInput
             className="logintext"
              wrapperClass="mb-4 email"
              label="Password"
              id="form2"
              value={values.password}
              onChange={handleChange("password")}
              // error={errors.password}
            
            />
            <MDBBtn 
            className="mb-4 w-100 gradient-custom-3 logintext"
            href="/home"
            component="form"
            onClick={handleSubmit}>
              Sign in
            </MDBBtn>
            <ToastContainer/>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="logintext">Don't have an account?</p>
              <MDBBtn outline className="mx-2 logintext" color="dark" href="/register">
                Register Here
              </MDBBtn>
            
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 ">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h1 className="codebloggs2">Codebloggs... </h1>
              <br/> <br/> <br/>
              
              <h3 className="codebloggs3">Blog till your fingers fall off</h3>
            </div>
          </div>
        </MDBCol>
    
      </MDBRow>
    
    </MDBContainer>
    // </div>
  );
}

export default Login;
