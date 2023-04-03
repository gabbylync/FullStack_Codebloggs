import "../../App.css";

import React from "react";
import Card from "react-bootstrap/Card";
import LikeButton from "../../components/likeButton";
import '../styles/blogg.css'
// import CookieMonster from "../cookies/CookieMonster";
import {getCookie} from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CreatebloggsModal from "../comments/CreatebloggsModal";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Bloggs() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState();
  /////////////////////////////////////////
  /// getting token validated on this page ////
  const token = getCookie('token');
  // console.log('true' , token);

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
        navigate("/bloggs")
        return;
      }
    }

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
    // console.log("users:", data.date);
  }

  getUsers();

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
    console.log('data >>>',data)
    setPosts(data.data);
    // console.log("posts:", data?.data.date);
    // console.log("look here" , data.data)
    // console.log("no look here , ")
  }

  console.log('this is post var')
  console.log('all pooops: ', posts)
///////////////////////////////////////
// useEffect(() => {


  // getallPosts();

  // async function getUsers() {
  //   const response = await fetch(`http://localhost:3004/all-users`);
  //   if (!response.ok) {
  //     const message = `An error occurred: ${response.statusText}`;
  //     window.alert(message);
  //     return;
  //   }

  //   let data = await response.json();
  //   setUsers(data);
  //   // console.log("users:", data.date);
  // }

  // getUsers();

//////////////////////////////////////
//   return;
// }, []);

function initals (name){
 let result = name.split(" ").map((n)=>n[0]).join("")
 return result.toUpperCase()
}



let myphotos = ["/HD-wallpaper-keyboard-lighta-color-lights-purple-purple-lighta-rgb.jpg", "/vwt54ake2n6tkobe.jpg", "/photo-1582769923195-c6e60dc1d8dc.jpg", "/tumblr_29bffd3826fa18d688410118a35f762c_cccc24d0_1280.jpg", "/IMG_8759.jpg", "/c1299fde40743509087146be4225e840.jpg", "/1317493acaa7eba2580dabda5d3c31f3d2af2a65r1-500-500v2_00.jpg", "/il_fullxfull.3607298325_bu04.webp"]
function photos(arr){
   const randomPhoto = Math.floor(Math.random() * arr.length);
   const photo = arr[randomPhoto];

   return photo;

}
  return (
    <>
    <div className="mainz">
    {posts
   ? posts.map((post)=>{
    console.log("post..." , post)
    return(
   <>
      <MDBRow key = {post._id} className="row-cols-1 row-cols-md-3 g-4">
      <MDBCard className="cardBloggs w-50" background='dark'>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src={photos(myphotos)} 
              alt="..."
              className = "img-fluid rounded-pill"
       
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              {/* <MDBCardTitle className = "blogInitals"> GC </MDBCardTitle> */}
              {/* <MDBCardTitle className = "blogInitals"> {post.user} </MDBCardTitle> */}
              <MDBCardTitle className = "blogInitals"> {initals(post.user.first_name + " " + post.user.last_name)} </MDBCardTitle>
              <MDBCardText className="blogText"> 
               {post.content}
              </MDBCardText>

              < CreatebloggsModal postID={post._id}/>

              <MDBCardText>
                <small className="text-muted">{post.date}</small>
              </MDBCardText>
            </MDBCardBody>
            <LikeButton postID = {post._id} postLike ={post.likes} 
            refresh = {getallPosts}/>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    
  </MDBRow>
  <br/>
  <br/>
  </>
    )

   }) : null
   
}
   </div> 
   
</>


  );
}
