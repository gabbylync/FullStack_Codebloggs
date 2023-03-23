
import React from 'react';
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import LikeButton from '././likeButton';
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css'
import '/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/home.css'

export default function Home() {
    return (
 
        <div>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
        <MDBCol>
          <MDBCard className = "homecard" background='dark'>
            <MDBCardImage
              src='https://www.businessleader.co.uk/wp-content/uploads/2021/08/Institute-of-Coding-1024x576.jpg'
              alt='...'
              position='top'
            />
            <MDBCardBody >
              <MDBCardTitle className = 'initals'> GC</MDBCardTitle>
              <MDBCardText className = 'status'>
                99 problems, but a bug ain't one 
              </MDBCardText>
            </MDBCardBody>
            <MDBListGroup  flush>
        <MDBListGroupItem className='firstname'> First Name </MDBListGroupItem>
        <MDBListGroupItem className='firstname'> Last Name </MDBListGroupItem>
        <MDBListGroupItem className='firstname'> Email </MDBListGroupItem>
        <MDBListGroupItem className='firstname'> Birthday  </MDBListGroupItem>
        <MDBListGroupItem className='firstname'> Occupation</MDBListGroupItem>
        <MDBListGroupItem className='firstname'> Location </MDBListGroupItem>
      </MDBListGroup>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard background='dark'>
            <MDBCardBody >
              <MDBCardTitle className='posts'> post </MDBCardTitle>
             
              <MDBCardText className='posts'>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <LikeButton/>
            </MDBCardBody>
            <MDBListGroup flush>
        <MDBListGroupItem>Post Date</MDBListGroupItem>
        <MDBListGroupItem className='commentlist'>Comment List</MDBListGroupItem>
        <MDBListGroupItem> ......</MDBListGroupItem>
      </MDBListGroup>

          </MDBCard>
          <br/>
          <br/>
          <MDBCard background='dark'>
            <MDBCardBody>
              <MDBCardTitle className='posts'> post </MDBCardTitle>
              <MDBCardText className='posts'>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <LikeButton/>
            </MDBCardBody>
            <MDBListGroup flush>
        <MDBListGroupItem>Post Date</MDBListGroupItem>
        <MDBListGroupItem className='commentlist'>Comment List</MDBListGroupItem>
        <MDBListGroupItem>.....</MDBListGroupItem>
      </MDBListGroup>
          </MDBCard>
          <br/>
          <br/>
          <MDBCard background='dark'>
            <MDBCardBody>
              <MDBCardTitle className='posts'> post </MDBCardTitle>
              <MDBCardText className='posts'>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <LikeButton/>
            </MDBCardBody>
            <MDBListGroup flush>
        <MDBListGroupItem>Post Date</MDBListGroupItem>
        <MDBListGroupItem className='commentlist'>Comment List </MDBListGroupItem>
        <MDBListGroupItem>.....</MDBListGroupItem>
      </MDBListGroup>
          </MDBCard>
        </MDBCol>
        </MDBRow>
        <br/>
        <br/>
        </div>
    );
}







{/* <div className='main'>
<h1>HOME PAGE</h1>

</div> */}