import React from "react";
import { Modal, Button } from "react-bootstrap";


function MypostModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
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

