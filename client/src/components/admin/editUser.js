import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {getCookie} from "react-use-cookie";
import "../styles/userManage.css";
import CreateEditModal from "../modals/CreateEditModal"
 
export default function Edit() {
   
    /////////////////////////////////////////
   /// getting token validated on this page ////
   const token = getCookie('token');
   console.log('true' , token);
 
   useEffect(() => {
     async function getValidation() {
     
       const response = await fetch(
         `http://localhost:3004/validatetoken/${token}`
       );
       const res = await response.json();
 
       if (res.msg === "No tokens are found" || token === undefined)
        {
         navigate("/")
         return;
       }
       if (res.msg == "Congrats: Validated Token!") {
         const message = "Validation Success"
         // window.alert(message);
         
         return;
       }
     }
 
     getValidation();
   }, []);


 const [form, setForm] = useState()
//    first_name: "",
//    last_name: "",
//    email: "",
//    rating: "",
//    fee: "",
//    sales: "",
//    region: "",
//    agents: [],
//  });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:3004/user-by-id/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const user = await response.json();
     if (!user) {
       window.alert(`User with id ${id} not found`);
       navigate("/userManagement");
       return;
     }
 
     setForm(user);
   
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // code appended onto the sumbit(e) block 
 async function onSubmit() {
   const editedUser = {
     first_name: form.first_name,
     last_name: form.last_name,
     email: form.email,
     password: form.password,
     status: form.status,
     location: form.location, 
     occupation: form.occupation,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`http://localhost:3004/update-user/${params.id}`, {
     method: "PATCH",
    //  should it say post or patch //
     body: JSON.stringify(editedUser),
     headers: {
       'Content-Type': 'application/json'
     },
   });

//    props.refresh()



//redirect to user Management page goes here////

   navigate("/userManagement");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
  
   <div>
   {form ? ( 
    <>
      
       
     <h3 className="editUserHeader"><span>Update User</span></h3>
    
     {/* <form onSubmit={onSubmit}> */}
     <div className="centerPage">
     <form className= "centerForm">
       <div className="form-group">
         <label htmlFor="first_name">First Name: </label>
         <input
           type="text"
           className="form-control"
           id="first_name"
           value={form.first_name}
           onChange={(e) => updateForm({ first_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="last_name">Last Name: </label>
         <input
           type="text"
           className="form-control"
           id="last_name"
           value={form.last_name}
           onChange={(e) => updateForm({ last_name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email: </label>
         <input
           type="text"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password: </label>
         <input
           type="text"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="status">Status: </label>
         <input
           type="text"
           className="form-control"
           id="status"
           value={form.status}
           onChange={(e) => updateForm({ status: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="location">Location: </label>
         <input
           type="text"
           className="form-control"
           id="location"
           value={form.location}
           onChange={(e) => updateForm({ location: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="occupation">Occupation: </label>
         <input
           type="text"
           className="form-control"
           id="occupation"
           value={form.occupation}
           onChange={(e) => updateForm({ occupation: e.target.value })}
         />
       </div>

       <br />
 
       <div className="form-group">
       <CreateEditModal updateHandle={onSubmit}/>
      
         {/* <input
           type="submit"
           value="Update"
           className="btn btn-primary"
         /> */}
       </div>
    
     </form>
     </div>
     </>
  ): null}
  
   </div>
  
 );
}