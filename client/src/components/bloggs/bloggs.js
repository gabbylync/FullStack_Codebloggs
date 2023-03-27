import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import LikeButton from "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/likeButton.js";
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/blogg.css'
// import CookieMonster from "../cookies/CookieMonster";
import {getCookie} from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState('poop');
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
        navigate("/bloggs")
        return;
      }
    }

    getValidation();
  }, []);
///////////////////////////////////////
useEffect(() => {
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
    console.log("users:", data.date);
  }

  getUsers();

  
//////////////////////////////////////////////////

// async function getPost(id) {
//   const response = await fetch(`http://localhost:3004/post-byId/${id}`);
  
//   const newPost = post?.filter((el) => el.id == id);
//   setPost(newPost);
//    const res = response.json()
//   if (!res.ok) {
//     const message = `An error occurred: ${response.statusText}`;
//     window.alert(message);
//     return;
//   }


// }

// getPost();
  return;
}, []);

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
    {posts
   ? posts.map((post)=>{
    return(
      <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
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
              <MDBCardTitle className = "blogInitals"> {initals(post.user.first_name + " " + post.user.last_name)} </MDBCardTitle>
              <MDBCardText className="blogText">
               {post.content}
              </MDBCardText>
              <MDBCardText className="blogText">
            Comment List 
              </MDBCardText>
              <MDBCardText>
                <small className="text-muted">{post.date}</small>
              </MDBCardText>
            </MDBCardBody>
            <LikeButton/>
          </MDBCol>
        </MDBRow>
      </MDBCard>
  </MDBRow>
  <br/>
  </>
    )

   }) : null
   
}
    
    {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4">
    <MDBCard className="cardBloggs w-50" background='dark'>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://wallpapers.com/images/featured/vwt54ake2n6tkobe.jpg"
            alt="..."
            className = "img-fluid rounded-pill"
          />
        </MDBCol> */}
        {/* <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle className = "blogInitals">initals</MDBCardTitle>
            <MDBCardText className="blogText">
           Post Content
            </MDBCardText>
            <MDBCardText className="blogText">
              Comment List 
                </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Date</small>
            </MDBCardText>
          </MDBCardBody>
          <LikeButton/>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</MDBRow>
<br/>
<MDBRow className="row-cols-1 row-cols-md-3 g-4">
    <MDBCard className="cardBloggs w-50" background='dark'>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVycGxlJTIwYWVzdGhldGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="..."
            className = "img-fluid rounded-pill"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle className = "blogInitals">initals </MDBCardTitle>
            <MDBCardText  className="blogText">
         Post Content
            </MDBCardText>
            <MDBCardText className="blogText">
              Comment List 
                </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Date</small>
            </MDBCardText>
          </MDBCardBody>
          <LikeButton/>
        </MDBCol>
      </MDBRow>
    </MDBCard> */}
{/* </MDBRow> */}
<br/>
</>


  );
}
