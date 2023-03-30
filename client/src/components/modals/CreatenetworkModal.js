import React, { useState } from "react";
import NetworkpostModal from "./NetworkpostModal";
import { Button } from "react-bootstrap";

function CreatepostModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = (e) => {
    e.preventDefault()
    // props.updateHandle();
    setShowModal(false);
  };

  return (
    <div>
        <br/>
      <Button className = "networkButton" variant = "secondary" onClick={handleEdit}> Click here to see my latest post! </Button>
      <NetworkpostModal
      userID ={props.userID}
        show={showModal}
        handleClose={handleClose}
        title="Posts 4 dayz!"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreatepostModal;
