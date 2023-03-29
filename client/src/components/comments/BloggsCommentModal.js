import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import BloggsUserComment from '../bloggs/bloggsUserComment'


function BloggsCommentModal (props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>  </Form.Label>

            <BloggsUserComment postID ={props.postID}/>
     
            
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
        Back to Bloggs Page
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BloggsCommentModal;
