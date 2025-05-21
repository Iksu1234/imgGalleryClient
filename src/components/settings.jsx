import { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";

function Settings({ show, handleClose }) {
  useEffect(() => {}, [show]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      style={{ color: "black" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <Form className="d-flex justify-content-between align-items-center">
              <FormLabel>Allow voting</FormLabel>
              <Form.Check
                type="switch"
                key={`switch-allow-voting`}
                aria-label={`switch-allow-voting`}
              />
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Settings;
