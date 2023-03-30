import React, { useState } from "react";
import { Button } from "react-bootstrap";
import HomeCommentModal from "./HomeCommentModal";
import "../styles/home.css"

function CreateHomeCommentmodal (props) {
  const [showModal, setShowModal] = useState(false);

  const handleCreateComment = () => {
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
    <div className = "homecommentButton">
        <br/>
      <Button variant = "secondary" onClick={handleCreateComment}> Comments are just a "click" away </Button>
      <HomeCommentModal
      postID ={props.postID}
        show={showModal}
        handleClose={handleClose}
        title="My Comments!"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreateHomeCommentmodal;
