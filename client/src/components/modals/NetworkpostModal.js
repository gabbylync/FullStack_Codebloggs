import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import NetworkUserpost from "../network/networkUserPost"

function NetworkpostModal(props) {
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
              <Form.Label>  </Form.Label>

            <NetworkUserpost userID ={props.userID}/>
            
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Back to Network Page
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NetworkpostModal;

   