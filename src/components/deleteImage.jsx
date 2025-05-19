import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { deleteImages } from "../services/apiService";

function DeleteImage({ show, handleClose, triggerRefresh, imagesData }) {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (index) => {
    setCheckedBoxes((prevChecked) => {
      if (prevChecked.includes(index)) {
        return prevChecked.filter((i) => i !== index);
      } else {
        return [...prevChecked, index];
      }
    });
  };

  const handleSelectAll = () => {
    if (checkedBoxes.length === imagesData.images.length) {
      setCheckedBoxes([]);
    } else {
      let allIndexes = imagesData.images.map((_, index) => index);
      setCheckedBoxes(allIndexes);
    }
  };

  const tryDelImages = async () => {
    try {
      await deleteImages(checkedBoxes);
      setCheckedBoxes([]);
      triggerRefresh();
      handleClose();
    } catch (error) {
      console.error("Error adding images: ", error);
    }
  };

  useEffect(() => {
    if (!show) {
      setCheckedBoxes([]);
    }
  }, [show]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item className="mb-2" variant="primary">
              Select All
              <Form.Check
                key={`checkboxAll`}
                aria-label={`checkbox-All`}
                inline
                className="float-end"
                checked={checkedBoxes.length === imagesData.images.length}
                onChange={() => handleSelectAll()}
              />
            </ListGroup.Item>

            {imagesData.images.map((image, index) => (
              <Form key={index}>
                <ListGroup.Item key={index} variant="success" className="mb-2">
                  {image.desc}
                  <Form.Check
                    key={`checkbox${index}`}
                    aria-label={`checkbox-${index}`}
                    inline
                    className="float-end"
                    onChange={() => handleCheckboxChange(index)}
                    checked={checkedBoxes.includes(index)}
                  />
                </ListGroup.Item>
              </Form>
            ))}
          </ListGroup>
          <Button
            onClick={tryDelImages}
            variant="danger"
            type="primary"
            className="w-25 mx-auto mt-2 float-end"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteImage;
