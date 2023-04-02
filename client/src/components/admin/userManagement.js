import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import "../styles/userManage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CreateDeleteModal from "../modals/CreateDeleteModal";
import { MDBDataTable } from "mdbreact";
import ReactPaginate from "react-paginate";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const User = (props) => (
  <tr>
    <td className="usersData">{props.users.first_name}</td>
    <td className="usersData">{props.users.last_name}</td>

    <td>
      <Link className="" to={`/edit/${props.users._id}`}>
        <Button className="editButton" variant="secondary">
          {" "}
          Edit
        </Button>
      </Link>{" "}
      <br />
      <CreateDeleteModal onDelete={props.deleteUser} />
    </td>
  </tr>
);

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    order: "none",
  });
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
  console.log(users);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true)
  //     const response = await fetch(`http://localhost:3004/all-users`);
  //     setUsers(response.data)
  //     setLoading(false)

  //   }
  //   fetchUsers()
  // }, [])
  // const sortMethods = {
  //   none: { method: (a, b) => null },
  //   ascending: { method: undefined },
  //   descending: { method: (a, b) => (a > b ? -1 : 1) },
  // };

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

    let sortedUsers = [...users];

    if (sortOrder.order !== "none") {
      sortedUsers.sort((a, b) => {
        const columnA = a[sortOrder.column];
        const columnB = b[sortOrder.column];

        if (columnA < columnB) {
          return sortOrder.order === "ascending" ? -1 : 1;
        } else if (columnA > columnB) {
          return sortOrder.order === "ascending" ? 1 : -1;
        } else {
          return 0;
        }
      });
    }

    const usersPerPage = 10;
    const offset = pageNumber * usersPerPage;
    const currentPageUsers = users.slice(offset, offset + usersPerPage);

    return currentPageUsers.map((user) => {
      return (
        <User
          users={user}
          deleteUser={() => deleteUser(user._id)}
          key={user._id}
        />
      );
    });
  }

  ///////////Pagination////////////////////
  function handlePageChange(selectedPage) {
    setPageNumber(selectedPage.selected);
  }

  ///////////Sorting the table/////////////
  function handleSort(column) {
    let newOrder = "ascending";
  
    if (sortOrder.column === column && sortOrder.order === "ascending") {
      newOrder = "descending";
    }
  
    if (column === "first_name" || column === "last_name") {
      const sortedUsers = [...users].sort((a, b) => {
        const columnA = a[column].toUpperCase();
        const columnB = b[column].toUpperCase();
  
        if (columnA < columnB) {
          return newOrder === "ascending" ? -1 : 1;
        } else if (columnA > columnB) {
          return newOrder === "ascending" ? 1 : -1;
        } else {
          return 0;
        }
      });
      setUsers(sortedUsers);
    }
  
    setSortOrder({ column, order: newOrder });
  }



  return (
    <>
      <br />
      <br />

      <h1 className="userlist" style={{ textAlign: "center" }}>
        <span>User List</span>
      </h1>

 

<div className="centerPage">
        <Table striped bordered hover variant="dark" className="userTable">
          <thead>
            <tr>
              <th onClick={() => handleSort("first_name")}>
                <button className="tableText">First Name</button>
              </th>
              <th onClick={() => handleSort("last_name")}>
                <button className="tableText">Last Name</button>
              </th>
              <th className="tableText ">Action</th>
            </tr>
          </thead>
        

          <tbody>{userList()}</tbody>

          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            pageCount={2}
            onPageChange={handlePageChange}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </Table>
      </div>
    </>
  );
}

// striped bordered hover variant="dark" className="userTable"

// function userList() {
//   return users
//     ? users.map((user) => {
//         return (
//           <User
//             users={user}
//             deleteUser={() => deleteUser(user._id)}
//             key={user._id}
//           />
//         );
//       })
//     : null;
// }
