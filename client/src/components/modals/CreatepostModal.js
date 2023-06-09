import React, { useState } from "react";
import MypostModal from "./MypostModal";
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
    // e.preventDefault()
    // props.createHandle();
    setShowModal(false);
  };

  return (
    <div>
      <Button className = "postButton" variant = "dark" onClick={handleEdit}> Post! </Button>
      <MypostModal
        show={showModal}
        handleClose={handleClose}
        title="Post something!"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreatepostModal;
