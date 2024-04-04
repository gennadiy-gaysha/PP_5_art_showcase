import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalAlertDeleteComment({ show, onHide, onConfirm }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this comment?
        <p className="mt-1">This action can not be undone!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete comment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlertDeleteComment;
