//import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AdminTools() {
  return (
    <>
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
    </>
  );
}

export default AdminTools;
