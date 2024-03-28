import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function ModalAlert(props) {
  const currentUser = useCurrentUser();
  const history = useHistory();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.heading}</h4>
        <p>{props.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            props.onHide();
            history.push(`/profiles/${currentUser?.profile_id}/edit`);
          }}
        >
          Complete profile
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlert;
