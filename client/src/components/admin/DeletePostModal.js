import React from "react";
import { Modal, Button } from "react-bootstrap";


function DeletePostModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        No thank you
        </Button>
        <Button variant="dark" onClick={props.handleSave}>
        DO IT! 
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePostModal;

