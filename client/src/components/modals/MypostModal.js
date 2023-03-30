import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {useState, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { setCookie } from 'react-use-cookie';
import { getCookie } from "react-use-cookie";


function MypostModal(props) {

  const navigate = useNavigate();
  const [userToken , setUserToken] = useState()
//////////////////////////////////////////////////////////
  useEffect(() => {
    async function getValidation() {
    
      const response = await fetch(
        `http://localhost:3004/validatetoken/${token}`
      );
      const res = await response.json();
      setUserToken(res.data.user._id)
      console.log("GABBYYYYYY", res.data.user._id)


      if (res.msg === "No tokens are found" || token === undefined)
       {
      
        return;
      }
      if (res.msg == "Congrats: Validated Token!") {
        const message = "Validation Success"
        // window.alert(message);
       
        return;
      }
    }


    getValidation();
  }, []);
////////////////////////////////////////////////////
  const token = (getCookie('token'));
 

  const[post, setPost] =useState({
    content: "",
    user: "",
  })
// spread operator is the ... 
//  We use this updatePost function to set the values 
// we type into the post content 

  function updatePost(value){
    return setPost((prev) => {
      return {...prev, ...value}
    })
  }

  async function onSubmit(e) {
    //  e.preventDefault();
  
  const postCreate = {content: post.content , user: userToken}
  
     const response = await fetch("http://localhost:3004/post-create", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
        body: JSON.stringify(postCreate),
     })
     .catch(error => {
       window.alert(error);
       return;
     });
     const res = await response.json()
     props.handleClose()
    
    }
  

  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>What's on your mind?</Form.Label>

              <Form.Control as="textarea" rows={3}  
               onChange={(e) => updatePost({ content: e.target.value })}
               value={post.content} />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Nah, nevermind.. 
        </Button>
        <Button variant="dark" onClick={onSubmit}> 
                                           
          Upload this sexy blogg post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MypostModal;

