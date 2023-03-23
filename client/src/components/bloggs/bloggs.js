import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import LikeButton from "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/likeButton.js";
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/blogg.css'
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
  return (
    <>
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCard className="cardBloggs w-50" background='dark'>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src="https://w0.peakpx.com/wallpaper/945/527/HD-wallpaper-keyboard-lighta-color-lights-purple-purple-lighta-rgb.jpg" 
                alt="..."
                className = "img-fluid rounded-pill"
         
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle className = "blogInitals"> Initals </MDBCardTitle>
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
            src="https://wallpapers.com/images/featured/vwt54ake2n6tkobe.jpg"
            alt="..."
            className = "img-fluid rounded-pill"
          />
        </MDBCol>
        <MDBCol md="8">
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
    </MDBCard>
</MDBRow>
<br/>
</>


  );
}
