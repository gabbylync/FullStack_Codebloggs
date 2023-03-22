import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import React from "react";
import Card from "react-bootstrap/Card";
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
        <MDBCard className="cardBloggs w-50">
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp" 
                alt="..."
                className = "img-fluid rounded-pill"
         
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
    </MDBRow>
    <br/>
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
    <MDBCard className="cardBloggs w-50">
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            className = "img-fluid rounded-pill"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</MDBRow>
<br/>
<MDBRow className="row-cols-1 row-cols-md-3 g-4">
    <MDBCard className="cardBloggs w-50">
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            className = "img-fluid rounded-pill"
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
</MDBRow>
<br/>
</>


  );
}
