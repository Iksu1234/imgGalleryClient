import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

// eslint-disable-next-line react/prop-types
function DeleteImage({ show, handleClose, triggerRefresh, images }) {
  const imageList = images;
  const tryDelImages = async () => {
    try {
      triggerRefresh();
      handleClose();
    } catch (error) {
      console.error("Error adding images: ", error);
    }
  };

  useEffect(() => {}, [show]);
  return (
    <>
      <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {imageList.images.map((image, index) => (
              <Form key={index}>
                <ListGroup.Item key={index}>
                  {image.desc}
                  <Form.Check
                    aria-label="option 1"
                    inline
                    className="float-end"
                  />
                </ListGroup.Item>
              </Form>
            ))}
          </ListGroup>
          <Button
            onClick={tryDelImages}
            variant="danger"
            type="primary"
            className="w-25 mx-auto mt-2 float-start"
          >
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteImage;
