import React, { useState } from "react";
import EditModal from "../modals/EdituserModal";
import { Button } from "react-bootstrap";


function CreateEditModal(props) {
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
      <Button variant="dark" onClick={handleEdit}> Update </Button>
      <EditModal
        show={showModal}
        handleClose={handleClose}
        title="Hold your horses"
        body="Are you sure you want to edit this user?"
        handleSave={handleSave}
      />
    </div>
  );
}

export default CreateEditModal;

