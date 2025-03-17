//import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// eslint-disable-next-line react/prop-types
function AddImage({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-3 mb-3">
            <Form.Group className="mb-3 w-25 mx-auto" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 w-25 mx-auto" controlId="formBasicText">
              <Form.Label>Link</Form.Label>
              <Form.Control type="link" placeholder="link" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddImage;
