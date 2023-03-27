import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/home.css'
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
// import CookieMonster from "../cookies/CookieMonster";
import {getCookie} from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Network() {

  const navigate = useNavigate();
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
        window.alert(message);
        navigate("/network")
        return;
      }
    }

    getValidation();
  }, []);
///////////////////////////////////////
    return (
   
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard background='dark' style={{ width: '18 rem'}} className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/Qnq6cV8/TA0-LESZM3-U01-JB13-JYG3-3e405c185829-512.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className = "networkInitals">T W</MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'>
           Declare variables, not war
            </MDBCardText>
            <MDBCardText className='mostRecent'>
             Most recent post from user
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard  background='dark' className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/56bkG2h/TA0-LESZM3-U04-KNHUH5-LZ-a59a9d5dc3ce-512.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className = "networkInitals">DB </MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'>
            Son of a bit
            </MDBCardText>
            <MDBCardText className='mostRecent'>
             Most recent post from user
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard  background='dark'className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/MNgmsyv/TA0-LESZM3-U04-KEJNBBEY-ae3f73a71a66-512.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className = "networkInitals">J H</MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'>
             This a wayyy, DATA wayyy
            </MDBCardText>
            <MDBCardText className='mostRecent'>
             Most recent post from user
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard  background='dark' className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/F6h2QBJ/TA0-LESZM3-U02-V12-FL44-D-c4ccec442629-512.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className = "networkInitals">B K </MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'>
              false! , It's funny cause it's true
            </MDBCardText>
            <MDBCardText className='mostRecent'>
             Most recent post from user
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard  background='dark' className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/4FXc5VW/TA0-LESZM3-U03-GSF51-ZRU-e02c4c64c948-512.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className = "networkInitals">A B</MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'>
              A user interface is like a joke. If you have to explain it, it's not that good
            </MDBCardText>
            <MDBCardText className='mostRecent'>
             Most recent post from user
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard   background='dark' className='h-100'>
          <MDBCardImage
            src='https://i.ibb.co/NVFr0rn/TA0-LESZM3-U04-JXJFH8-PR-8bdb35f028b2-512.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className = "networkInitals">GC</MDBCardTitle>
            <MDBCardText className =  "userInfo">
              User Info
            </MDBCardText>
            <MDBCardText className='userStatus'> 
             I'd rate my programming puns C ++
            </MDBCardText>
            <MDBCardText className='mostRecent'>
            Most recent post 
             </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>

    
    )
}