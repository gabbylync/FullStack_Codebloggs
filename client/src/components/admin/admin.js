import "../../App.css";
import React from "react";
// import Card from "react-bootstrap/Card";
import "../styles/admin.css"
import {getCookie} from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { MDBCol } from 'mdb-react-ui-kit';
import { Container, CardGroup, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const styles = {
  card: {
    backgroundColor: `#D1C4E9`,
    borderRadius: 90,
    padding: "5rem",
    width: "50%",
    height: "60%",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 10,
  },
  // contentManagementText: {
    
  // }
};


export default function Admin() {

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
        // window.alert(message);
        navigate("/admin")
        return;
      }
    }

    getValidation();
  }, []);
///////////////////////////////////////
  return (
    <div className ="mainz">
    <>
     <Container fluid>
      <br/>
      <br/>
      <br/>
      <br/>
      <CardGroup className="m-3 d-block">
        <Card className="m-auto border-5 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src= "/avatar-profile-pink-neon-icon-brick-wall-background-pink-neon-icon-vector.jpg"
               style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className ="userManagetext " as="h1">User Management</Card.Title>
                <br />
                <br />
                <br />
                <Button
                  onClick={() => {
                    navigate("/userManagement");
                  }}
                  type="submit"
                  className="agentManagement"
                  variant="dark"
                >
                  Click to View
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
      <br/>
      <br/>
      <CardGroup className="m-3 d-block">
        <Card className="m-auto border-5 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img src= "/neon-online-education-icon-glowing-neon-webinar-sign-digital-study-in-vivid-colors-video-course-distance-learning-teaching-platform-icon-set-sign-symbol-for-ui-vector-illustration-400-251017570-1.jpg"
          
               style={styles.cardImage} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title style={styles.contentManagementText} className="userManagetext " as="h1">Content Management</Card.Title>
                <br />
                <br />
                <br />
                <Button
                  className="userContent"
                  onClick={() => {
                    navigate("/userContent");
                  }}
                  type="submit"
                  variant="dark"
                >
                  Click to View
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>

   
    </>
    </div>
  );
}


