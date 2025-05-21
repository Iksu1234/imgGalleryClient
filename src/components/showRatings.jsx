import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function ShowRatings({ show, handleClose, imagesData, ratingsData }) {
  useEffect(() => {}, [show]);

  function shortenDesc(desc) {
    if (desc.length > 27) {
      return desc.substring(0, 27) + "...";
    }
    return desc;
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ color: "black" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Current month image ratings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {imagesData.images.map((image, index) => (
              <Form key={index}>
                <ListGroup.Item key={index} variant="success" className="mb-2">
                  {shortenDesc(image.desc)}
                  <p className="float-end">
                    Rating result mean:{" "}
                    <strong style={{ color: "black" }}>
                      {ratingsData[index] || "Not rated"}
                    </strong>
                  </p>
                </ListGroup.Item>
              </Form>
            ))}
          </ListGroup>
          <Button
            onClick={handleClose}
            variant="secondary"
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
