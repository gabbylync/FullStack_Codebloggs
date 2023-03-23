import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/admin.css"

export default function Admin() {
  return (
    <>
    
        <Card className="admincard">
          <Card.Img 
          className="usermanagement"
            src="https://static.vecteezy.com/system/resources/previews/016/706/387/original/abstract-purple-watercolor-background-aesthetic-ink-painting-free-vector.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className = "usermanagementText"
            >User Management</Card.Title>
           
            <Card.Text>  </Card.Text>
          </Card.ImgOverlay>
        </Card>
     
      <div>
        <Card className="admincard">
          <Card.Img
          className="usermanagement2"
            src="https://static.vecteezy.com/system/resources/previews/016/706/387/original/abstract-purple-watercolor-background-aesthetic-ink-painting-free-vector.jpg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className = "usermanagementText2"
            >Content Management</Card.Title>
            <Card.Text>
             
            </Card.Text>
            <Card.Text>  </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
