import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ImageForm from "../../models/imageForm.js";
import { patchImages } from "../services/apiService";

// eslint-disable-next-line react/prop-types
function AddImage({ show, handleClose, triggerRefresh }) {
  const [linkInputs, setLinkInputs] = useState(["linkInput"]);
  const [name, setName] = useState("");

  const addRow = () => {
    const newInputId = `linkInput${linkInputs.length + 1}`;
    setLinkInputs([...linkInputs, newInputId]);
  };
  const tryAddImages = async () => {
    try {
      const links = linkInputs.map((id) => document.getElementById(id).value);
      const imageForm = new ImageForm(name, links);
      const result = await patchImages(imageForm);
      console.log("Images add result: ", result);

      triggerRefresh();
      handleClose();
    } catch (error) {
      console.error("Error adding images: ", error);
    }
  };

  useEffect(() => {
    if (!show) {
      setName("");
      setLinkInputs(["linkInput"]);
    }
  }, [show]);

  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            {linkInputs.map((id, index) => (
              <Form.Group key={id} className="mb-3" controlId={id}>
                <Form.Control type="text" placeholder={`Link ${index + 1}`} />
              </Form.Group>
            ))}
          </Form>
          <Button
            onClick={addRow}
            variant="secondary"
            type="add"
            className="mx-auto float-start"
          >
            Add row
          </Button>
          <Button
            onClick={tryAddImages}
            variant="primary"
            type="submit"
            className="w-25 mx-auto float-end"
          >
            Submit
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddImage;
