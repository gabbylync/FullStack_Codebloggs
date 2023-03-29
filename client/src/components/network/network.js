import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/home.css";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
// import CookieMonster from "../cookies/CookieMonster";
import { getCookie } from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CreatenetworkModal from "../modals/CreatenetworkModal";

export default function Network() {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  /////////////////////////////////////////
  /// getting token validated on this page ////
  const token = getCookie("token");
  // console.log('true' , token);

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
        navigate("/network");
        return;
      }
    }

    getValidation();


    ///////////////////////////////
    //// getting all users //////
    ///////////////////////////
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
  console.log("users!:", users ? users[0]._id : null);
  
  //// getting initals /////
  function initals(name) {
    let result = name
      .split(" ")
      .map((n) => n[0])
      .join("");
    return result.toUpperCase();
  }
  console.log("this is users for sure");
  console.log(users);

  ///////////////////////////////////////
  return (
    <>
      {users
        ? users.map((user) => {
            return (
            
                <MDBCard key={user._id} background="dark" className="network">
                  <MDBCardImage
                    src="/codebloggs_logo2.png"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle className="networkInitals">
                      {initals(user.first_name + " " + user.last_name)}
                    </MDBCardTitle>
                    <MDBCardText className="userInfo">
                      {user.first_name + " " + user.last_name}
                      <br /> <br />
                      Birthday: {user.birthday}
                      <br />
                      Email: {user.email}
                      <br />
                      Location: {user.location}
                      <br />
                      Occupation: {user.occupation}
                      <br />
                    </MDBCardText>
                    <MDBCardText className="userStatus">
                      Status: {user.status}
                    </MDBCardText>
                    <CreatenetworkModal userID ={user._id}/>
                  </MDBCardBody>
                </MDBCard>
              
            )
          })
        : null}
    </>
  );
}

{
  /* // <MDBCard  background='dark' className='h-100'>
// <MDBCardImage */
}
{
  /* //         src='https://i.ibb.co/56bkG2h/TA0-LESZM3-U04-KNHUH5-LZ-a59a9d5dc3ce-512.jpg'
    //         alt='...'
    //         position='top'
    //       />
    //       <MDBCardBody>
    //       <MDBCardTitle className = "networkInitals">DB </MDBCardTitle>
    //         <MDBCardText className =  "userInfo">
    //           User Info
    //         </MDBCardText>
    //         <MDBCardText className='userStatus'>
    //         Son of a bit
    //         </MDBCardText>
    //         <MDBCardText className='mostRecent'>
    //          Most recent post from user
    //         </MDBCardText>
    //       </MDBCardBody>
    //     </MDBCard>
    //   </MDBCol> */
}
{
  /* //   <MDBCol>
    //     <MDBCard  background='dark'className='h-100'>
    //       <MDBCardImage */
}
{
  /* //         src='https://i.ibb.co/MNgmsyv/TA0-LESZM3-U04-KEJNBBEY-ae3f73a71a66-512.jpg'
    //         alt='...'
    //         position='top'
    //       />
    //       <MDBCardBody>
    //       <MDBCardTitle className = "networkInitals">J H</MDBCardTitle>
    //         <MDBCardText className =  "userInfo">
    //           User Info
    //         </MDBCardText>
    //         <MDBCardText className='userStatus'>
    //          This a wayyy, DATA wayyy
    //         </MDBCardText>
    //         <MDBCardText className='mostRecent'>
    //          Most recent post from user
    //          </MDBCardText>
    //       </MDBCardBody>
    //     </MDBCard>
    //   </MDBCol> */
}
{
  /* //   <MDBCol>
    //     <MDBCard  background='dark' className='h-100'>
    //       <MDBCardImage */
}
{
  /* //         src='https://i.ibb.co/F6h2QBJ/TA0-LESZM3-U02-V12-FL44-D-c4ccec442629-512.png'
    //         alt='...'
    //         position='top'
    //       />
    //       <MDBCardBody>
    //       <MDBCardTitle className = "networkInitals">B K </MDBCardTitle>
    //         <MDBCardText className =  "userInfo">
    //           User Info
    //         </MDBCardText>
    //         <MDBCardText className='userStatus'>
    //           false! , It's funny cause it's true
    //         </MDBCardText>
    //         <MDBCardText className='mostRecent'>
    //          Most recent post from user
    //          </MDBCardText>
    //       </MDBCardBody>
    //     </MDBCard>
    //   </MDBCol> */
}
{
  /* //   <MDBCol>
    //     <MDBCard  background='dark' className='h-100'>
    //       <MDBCardImage */
}
{
  /* //         src='https://i.ibb.co/4FXc5VW/TA0-LESZM3-U03-GSF51-ZRU-e02c4c64c948-512.jpg'
    //         alt='...'
    //         position='top'
    //       />
    //       <MDBCardBody>
    //       <MDBCardTitle className = "networkInitals">A B</MDBCardTitle>
    //         <MDBCardText className =  "userInfo">
    //           User Info
    //         </MDBCardText>
    //         <MDBCardText className='userStatus'>
    //           A user interface is like a joke. If you have to explain it, it's not that good
    //         </MDBCardText>
    //         <MDBCardText className='mostRecent'>
    //          Most recent post from user
    //          </MDBCardText>
    //       </MDBCardBody>
    //     </MDBCard>
    //   </MDBCol> */
}
{
  /* //   <MDBCol>
    //     <MDBCard   background='dark' className='h-100'>
    //       <MDBCardImage */
}
{
  /* //         src='https://i.ibb.co/NVFr0rn/TA0-LESZM3-U04-JXJFH8-PR-8bdb35f028b2-512.png'
    //         alt='...'
    //         position='top'
    //       />
    //       <MDBCardBody>
    //       <MDBCardTitle className = "networkInitals">GC</MDBCardTitle>
    //         <MDBCardText className =  "userInfo">
    //           User Info
    //         </MDBCardText>
    //         <MDBCardText className='userStatus'> 
    //          I'd rate my programming puns C ++
    //         </MDBCardText>
    //         <MDBCardText className='mostRecent'>
    //         Most recent post 
    //          </MDBCardText>
    //       </MDBCardBody>
    //     </MDBCard>
    //   </MDBCol> */
}
{
  /* // </MDBRow> */
}
