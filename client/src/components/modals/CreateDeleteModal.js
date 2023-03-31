import React, { useState } from "react";
import DeleteuserModal from "./DeleteuserModal";
import { Button } from "react-bootstrap";
import "../styles/userManage.css";

function CreateDeleteModal(props) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    props.onDelete();
    setShowModal(false);
  };

  return (
    <div>
      <Button className ="deleteButton" variant="secondary" onClick={handleDelete}>Delete</Button>
      <DeleteuserModal
        show={showModal}
        handleClose={handleClose}
        title="Hold your horses"
        body="Are you sure you want to delete this user?"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreateDeleteModal;