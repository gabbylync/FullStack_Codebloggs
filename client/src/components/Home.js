import React from "react";
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import LikeButtonHome from "././LikeButtonHome";
import { getCookie } from "react-use-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateHomeCommentmodal from "./comments/CreateHomeCommentmodal";
import "../App.css";
import "../components/styles/home.css";


export default function Home() {
  const navigate = useNavigate();
  const token = getCookie("token");
  // console.log("true", token);
  const [homeUser, setHomeUser] = useState();
  const [posts, setPosts] = useState([]);
  const [res , setRes] = useState()

  useEffect(() => {
    let user = {}
    ///// getting token validation //////
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
        navigate("/home");
        return;
      }
    }
  
    getValidation();


   //// getting the user that is logged in's info ////
   async function getHomeUser() {
    const response = await fetch(
      `http://localhost:3004/session-email/${token}`
    );

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }
    const res = await response.json();

  
    setHomeUser(res.session.user);
     user = res.session.user
  
    // userPostsbyUserID()
    userPostsbyUserID(res.session.user._id)
  }   
    getHomeUser();



    
  }, []);



  async function userPostsbyUserID(id) {
    console.log("id" , id)
    const response = await fetch(
      `http://localhost:3004/allposts-by-user/${id}`
    );
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.log("ERROR" ,message)
      return;
    }

    let data = await response.json();
    setPosts(data);
    console.log("this is data: ", data);
  }

  function initals(name) {
    let result = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return result.toUpperCase();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
    <div className= "mainz">
  
      <MDBRow className="row-cols-1 row-cols-md-2 g-4">
        {/* <MDBCol> */}
          <MDBCard className="homecard" background="dark">
            <MDBCardImage
              src="https://www.businessleader.co.uk/wp-content/uploads/2021/08/Institute-of-Coding-1024x576.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="initals">  ~ {initals(homeUser?.first_name + " " + homeUser?.last_name)} ~ </MDBCardTitle>
              {/* {initals(homeUser ? homeUser.first_name : null + " " + homeUser ? homeUser.last_name : null)} */}
              <MDBCardText className="status">  Status: 
              {" "}
                {homeUser ? homeUser.status : null}{" "}
              </MDBCardText>
            </MDBCardBody>
            <MDBListGroup>
              <MDBListGroupItem className="firstname">
                {" "}
                {homeUser ? homeUser.first_name : null}{" "}
              </MDBListGroupItem>
              <MDBListGroupItem className="firstname">
                {" "}
                {homeUser ? homeUser.last_name : null}{" "}
              </MDBListGroupItem>
              <MDBListGroupItem className="firstname2">
                {" "}
                Email : {homeUser ? homeUser.email : null}
              </MDBListGroupItem>
              <MDBListGroupItem className="firstname2">
                {" "}
                B-Day : {homeUser ? homeUser.birthday : null}{" "}
              </MDBListGroupItem>
              <MDBListGroupItem className="firstname2">
                {" "}
                Occupation : {homeUser ? homeUser.occupation : null}{" "}
              </MDBListGroupItem>
              <MDBListGroupItem className="firstname2">
                {" "}
                Location : {homeUser ? homeUser.location : null}{" "}
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCard>
        {/* </MDBCol> */}
     

        {posts
          ? posts.map((post) => {
              return (
              
                  <MDBCol key={post._id}>
                    <MDBCard background="dark" className="myposts" >
                      <MDBCardBody>
                        <MDBCardTitle className="posts"> My posts </MDBCardTitle>
                      <br/>
                        <MDBCardText   className="posts2">
                          {post.content}
                        </MDBCardText>
                        <LikeButtonHome  postID = {post._id} postLike ={post.likes}
                          refresh = {userPostsbyUserID} userID = {homeUser} />
                      </MDBCardBody>
                      <MDBListGroup>
                        
                        <MDBListGroupItem className="commentlist">
                       Date posted:  {post.date}
                        </MDBListGroupItem>

                    < CreateHomeCommentmodal postID={post._id} /> 
                       
                      </MDBListGroup>
                   
                    </MDBCard>
                  </MDBCol>
               
              );
            })
          : null}
      </MDBRow>
      </div>
    </>
  );
}

