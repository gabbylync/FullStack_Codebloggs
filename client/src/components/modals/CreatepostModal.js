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
    e.preventDefault()
    props.updateHandle();
    setShowModal(false);
  };

  return (
    <div>
      <Button variant = "dark" onClick={handleEdit}> Post! </Button>
      <MypostModal
        show={showModal}
        handleClose={handleClose}
        title="Hold up"
        body="Are you sure you want to post this?"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreatepostModal;
