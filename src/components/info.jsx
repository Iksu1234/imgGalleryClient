import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Info({ show, handleClose }) {
  useEffect(() => {}, [show]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      style={{ color: "black" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Image gallery app made with vite react, bootstrap and express.js</p>
        <a href="https://github.com/Iksu1234">
          <img
            alt="github logo"
            src="../images/github.svg"
            width="25vw"
            height="25vh"
            className="d-inline-block align-top mx-3"
            color="white"
          ></img>
          Github{" "}
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Info;
