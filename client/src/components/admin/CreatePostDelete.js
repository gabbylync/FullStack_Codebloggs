import React, { useState } from "react";
import DeletePostModal from "./DeletePostModal";
import { Button } from "react-bootstrap";
import "../styles/userManage.css";

function CreatePostDelete(props) {
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
      <Button className ="deletePostButton" variant="secondary" onClick={handleDelete}>Delete</Button>
      <DeletePostModal
        show={showModal}
        handleClose={handleClose}
        title="Hold up"
        body="Are you sure you want to delete this post?"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreatePostDelete ;