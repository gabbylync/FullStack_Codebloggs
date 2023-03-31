import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/userManage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CreateDeleteModal from "../modals/CreateDeleteModal";
import { MDBDataTable } from 'mdbreact';

const User = (props) => (
  <tr>
    <td className = "usersData">{props.users.first_name}</td>
    <td className = "usersData">{props.users.last_name}</td>

    <td>
       <Link className="" to={`/edit/${props.users._id}`}> 
             <Button className="editButton" variant="secondary"> Edit</Button>
            </Link>{" "} 
       <br /> 

      <CreateDeleteModal onDelete={props.deleteUser}/> 
    </td>
  </tr>
);

export default function UserManagement() {
const [users, setUsers] = useState();
  const navigate = useNavigate();

  
  /////////////////////////////////////////
  /// getting token validated 1st  ////
  ///////////////////////////////////////////
  const token = getCookie("token");
  console.log("true", token);

  useEffect(() => {
    async function getValidation() {
      const response = await fetch(
        `http://localhost:3004/validatetoken/${token}`
      );
      const res = await response.json();

      if (res.msg === "No tokens are found" || token === undefined) {
        navigate("/");
        return;
      }
      if (res.msg == "Congrats: Validated Token!") {
        const message = "Validation Success";
        // window.alert(message);
        navigate("/userManagement");
        return;
      }
    }

    getValidation();

    ///////////////////////////////////////
    //// GET:  obtaining all Users //////////////
    ///////////////////////////////////
    async function getUsers() {
        const response = await fetch(`http://localhost:3004/all-users`);
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
  
        let data = await response.json();
        setUsers(data);
      }
      
      getUsers();
     
  }, []);

  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };

      /////////////////////////////////////////
    // DELETE: This method will delete a agent ////////
    /////////////////////////////////////////
    async function deleteUser(id) {
        await fetch(`http://localhost:3004/user-delete/${id}`, {
          method: "DELETE",
        });
  
        const oldUser = users.filter((el) => el._id !== id);
        setUsers(oldUser);
      }
  
      // This method will map out the agents on the table
      function userList() {
        return users
          ? users.map((user) => {
              return (
                <User
                  users={user}
                  deleteUser={() => deleteUser(user._id)}
                  key={user._id}
                />
              );
            })
          : null;
      }
//////////////////////////////////////////////////////////////////////////////////

  return (
    <>
  
    <br/>
    <br/>

         <h1  className = "userlist" style={{textAlign: "center"}} ><span>User List</span></h1>
    
      {/* <Link className="nav-link" to="/create">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button  variant="secondary"> Create User Here </Button>
        </div>
      </Link> */}
   
    

         <div className="centerPage">
      <Table striped bordered hover variant="dark" className="userTable">
        <thead>
          <tr>
            <th className="tableText ">First Name</th>
            <th className="tableText ">Last Name </th>
            <th className="tableText ">Action</th>
          </tr>
        </thead>
        <tbody>{userList()}</tbody>
      </Table>
    </div>
    </>
  );
}
