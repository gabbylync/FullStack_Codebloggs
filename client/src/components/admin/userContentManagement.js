import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "react-use-cookie";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import CreatebloggsModal from "../comments/CreatebloggsModal";
import LikeButton from "../../components/likeButton";
import "../styles/userManage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import CreatePostDelete from "./CreatePostDelete";
import Table from "react-bootstrap/Table";
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

export default function ContentManagement() {
  const [users, setUsers] = useState();
  const [posts, setPosts] = useState();
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
        navigate("/userContent");
        return;
      }
    }

    getValidation();
  }, []);

  async function getallPosts() {
    const response = await fetch(`http://localhost:3004/allPosts`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    let data = await response.json();
    setPosts(data.data);
    console.log("posts:", data?.data.date);
    console.log("look here", data.data);
   
  }

  console.log("this is post var");
  console.log(posts);
  ///////////////////////////////////////
  useEffect(() => {
    getallPosts();

    async function getUsers() {
      const response = await fetch(`http://localhost:3004/all-users`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      let data = await response.json();
      setUsers(data);
      console.log("users:", data.date);
    }

    getUsers();

    return;
  }, []);

  /////////////////////////////////////////
  // DELETE: This method will delete a post ////////
  /////////////////////////////////////////

  async function deletePost(id) {
    await fetch(`http://localhost:3004/post-delete/${id}`, {
      method: "DELETE",
    });
   
    const oldpost = posts.filter((el) => el._id !== id);
    setPosts(oldpost);
 
  }

  // This method will map out the posts on the table
  function postList() {
    return posts
      ? posts.map((post) => {
          return (
            <tr  key={post._id}>
    <td className = "usersData">{post._id}</td>
    <td className = "usersData">{post.content}</td>

    <td>

      <CreatePostDelete onDelete={() => {deletePost(post._id)}}/> 
    </td>
  </tr>
          );
        })
      : null;
  }

  ///////////////////////////////////////////////////////////


  return (
    <>
      <br /> <br />
     
      <h1 className="userlist" style={{ textAlign: "center" }}>
        <span>All Users Bloggs </span>
      </h1>
      <Button     className="back"
                  onClick={() => {
                    navigate("/admin");
                  }}
                  type="submit"
                  variant="dark"
                >
                  Back to Admin
                </Button>
      <br/> <br/>
      <nav aria-label='Search results pages'>
      <MDBPagination >
        <MDBPaginationItem className = "pagination">
          <MDBPaginationLink className ="pagText" href='#'>Previous</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink className ="pagText" href='#'>1</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink className ="pagText" href='#'>2</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink className ="pagText" href='#'>3</MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink className ="pagText" href='#'>Next</MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
    <br/> 
      <div className="centerPage">
      <Table striped bordered hover variant="dark" className="userTable">
        <thead>
          <tr >
            <th className="tableText ">User</th>
            <th className="tableText ">Post Content</th>
            <th className="tableText ">Action</th>
          </tr>
        </thead>
        <tbody>{postList()}</tbody>
      </Table>
     
    </div>
         
    </>
  );
}

