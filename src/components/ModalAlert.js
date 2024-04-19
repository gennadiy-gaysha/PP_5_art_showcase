import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function ModalAlert({ show, onHide }) {
  const currentUser = useCurrentUser();
  const history = useHistory();
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 className="ml-2 mb-2 mt-2" style={{ color: "#802222" }}>
            Please complete your profile to fully engage with our community!
          </h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="mb-4 mt-2">Here's what you'll be able to do:</h5>
        <div>
          <ul>
            <li>
              <strong>Add Your Paintings:</strong> Showcase your artwork by
              uploading it to our gallery.
            </li>
            <li>
              <strong>Curate Your Watchlist:</strong> Keep an eye on your
              favorite pieces by adding them to your personal watchlist.
            </li>
            <li>
              <strong>Connect with Artists:</strong> Add other artists to your
              Faves list to follow their new work and updates.
            </li>
            <li>
              <strong>Participate in Discussions:</strong> Leave comments on
              paintings and join the conversation with artists and art lovers
              alike.
            </li>
            <li>
              <strong>Manage Your Account:</strong> Change your password and
              update your account settings with ease.
            </li>
          </ul>
          <p className="pt-2">
            Just click the button below to finalize your profile and start
            enjoying these benefits!
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            onHide();
            history.push(`/profiles/${currentUser?.profile_id}/edit`);
          }}
        >
          Complete your profile
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAlert;
