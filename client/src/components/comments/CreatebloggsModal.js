import React, { useState } from "react";
import { Button } from "react-bootstrap";
import BloggsCommentModal from "./BloggsCommentModal";

function CreatebloggsModal (props) {
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
    <div>
        <br/>
      <Button className = "bloggscommentButton" variant = "secondary" onClick={handleCreateComment}> Click here to see spicy comments </Button>
      <BloggsCommentModal
      postID ={props.postID}
        show={showModal}
        handleClose={handleClose}
        title="Comments 4 dayz!"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreatebloggsModal;
