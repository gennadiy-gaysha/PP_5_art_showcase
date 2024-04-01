import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalAlertDeletePainting({ show, onHide, onConfirm }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Painting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this painting?
        <p className="mt-1">This action can not be undone!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete painting
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlertDeletePainting;
