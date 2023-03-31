import React from "react";
import { Modal, Button } from "react-bootstrap";


function DeleteuserModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Neigh was José
        </Button>
        <Button variant="dark" onClick={props.handleSave}>
        DO IT AND FULFILL MY DESTINYYYY
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteuserModal;

