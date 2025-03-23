import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function ShowRatings({ show, handleClose, imagesData, ratingsData }) {
  useEffect(() => {}, [show]);

  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Image ratings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {imagesData.images.map((image, index) => (
              <Form key={index}>
                <ListGroup.Item key={index} variant="success" className="mb-2">
                  {image.desc}
                  <p className="float-end">
                    Rating result mean:{" "}
                    <strong>{ratingsData[index] || "No ratings yet"}</strong>
                  </p>
                </ListGroup.Item>
              </Form>
            ))}
          </ListGroup>
          <Button
            onClick={handleClose}
            variant="info"
            type="info"
            className="w-25 mx-auto mt-2 float-end"
          >
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShowRatings;
