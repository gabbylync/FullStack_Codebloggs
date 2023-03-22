import React from 'react';
import { useState, useEffect  } from "react";
import { Form, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';

function Login() {
  // const [userToken, setUserToken] = useCookie('token', '0');;
  // const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  //   showPassword: false,
  // });
  // const [errors, setErrors] = useState({
  //   email: false,
  //   password: false,
  //   fetchError: false,
  //   fetchErrorMsg: "",
  // });
  // const [agents, setAgents] = useState({});
  // const [users, setUsers] = useState({});

  // useEffect(() => {
  //   async function getUsers() {
  //     const response = await fetch(`http://localhost:3004/users`);
  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }

  //     let users = await response.json();
  //     users = users.data;
  //     console.log("users:", users);
  //     setUsers(users);
  //   }

  //   getUsers();

  //   return;
  // }, []);

// const handleChange = (fieldName) => (event) => {
//     const currValue = event.target.value;
//     let isCorrectValue =
//       fieldName === "email"
//         ? validator.isEmail(currValue)
//         : regexPassword.test(currValue);

//     isCorrectValue
//       ? setErrors({ ...errors, [fieldName]: false })
//       : setErrors({ ...errors, [fieldName]: true });

//     setValues({ ...values, [fieldName]: event.target.value });
//   };

//   const handleShowPassword = () => {
//     setValues({
//       ...values,
//       showPassword: !values.showPassword,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const res = await fetch("http://localhost:3004/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: values.email,
//           password: values.password,
//         }),
//       });

//       if (!res.ok) {
//         const error = await res.json();
//         return setErrors({
//           ...errors,
//           fetchError: true,
//           fetchErrorMsg: error.msg,
//         });
//       }

//       const data = await res.json();

//       setUserToken(data.session.session_token);
// setErrors({
//   ...errors,
//   fetchError: true,
//   fetchErrorMsg: data.msg,
// });
// setValues({
//   email: "",
//   password: "",
//   showPassword: false,
// });
// // return
// } catch (error) {
// setErrors({
//   ...errors,
//   fetchError: true,
//   fetchErrorMsg: "",
// });
// }


//  let userEmailList = [];
//  const list = users.map((user) => {
//    userEmailList.push(user.email);
//  });
//  let foundPassword;

//  let userpasswordList = [];
//  users.map((user) => {
//    userpasswordList.push(user.password);
//  });

//  let agentEmailList = [];
//  agents.map((agent) => {
//    agentEmailList.push(agent.email);
//  });
// userpasswordList.filter((password) => {
//   if (password === values.password) {
//     foundPassword = values.password;
//   }
// });

// if (
//   userEmailList.includes(values.email) &&
//   foundPassword === values.password
// ) {
//   toast.success("Success: Loading Agent Info...", {
//     position: toast.POSITION.TOP_CENTER,
//     theme: "colored",
//     autoClose: 5000,
//     onClose: () => {
//       navigate("/");
//     },
//   });
// } else {
//   toast.error("Error: Incorrect Email or Password", {
//     position: toast.POSITION.TOP_CENTER,
//     theme: "dark",
//     autoClose: 5000,
//   });
//   navigate("/login");
// }
// };


  return (
    <div className='main'>
    <MDBContainer className=" my-4 gradient-form align-items-stretch">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="flex flex-column ms-5">

            <div className="text-center">
              <img src="https://i.ibb.co/RBbJS4p/Code-Bloggs-graphic.png"
                style={{width: '100px' }} alt="logo" />
              <br/>
              <br/>
              <h4 className="mt-1 mb-5 pb-1">Welcome back Codebloggers</h4>
            </div>

            <p className ="text-center" >Please login to your account</p>

{/*  Have to insert component="form"   and   onSubmit={handleSubmit} into this area somwhere*/}
{/* <Form></Form> */}
            <MDBInput wrapperClass='mb-4' label='Email address'  onChange={    ("email")} id='form1' type='email'/>
                                                                                          {/* handleChange in onChange space above  */}
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>
            <MDBBtn className="mb-4 w-100 gradient-custom-3" href="/home" >Sign in</MDBBtn>

  

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Don't have an account?</p>
              <MDBBtn outline className='mx-2' color='dark' href="/register">
                Register Here
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4 ">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h1 class="mb-4">Codebloggs... </h1>
              <h3 class="mb-0">Blog till your fingers fall off
              </h3>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;