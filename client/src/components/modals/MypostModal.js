import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function MypostModal(props) {
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
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Nah, nevermind.. 
        </Button>
        <Button variant="dark" onClick={props.handleSave}>
          Upload this sexy blogg post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MypostModal;

