import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/App.css";
import React from "react";
import Card from "react-bootstrap/Card";
import "/Users/shootermcgabbin/Codeboxx/FullStack_Codebloggs/client/src/components/styles/admin.css"
import {getCookie} from "react-use-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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
        window.alert(message);
        navigate("/admin")
        return;
      }
    }

    getValidation();
  }, []);
///////////////////////////////////////
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
