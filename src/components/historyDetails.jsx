import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Zoom from "react-medium-image-zoom";
import Image from "react-bootstrap/Image";

function HistoryDetails({
  show,
  handleClose,
  monthName,
  monthData = { images: [] },
}) {
  console.log("historyDetails Data:" + JSON.stringify(monthData));
  useEffect(() => {}, [show]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ color: "black" }}
        size="lg"
        scrollable="true"
      >
        <Modal.Header closeButton>
          <Modal.Title>{monthName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {monthData.images.map((image, index) => (
              <Card key={index} className="imageWrapper mb-4">
                <Carousel key={{ monthName }} interval={null} fade>
                  {monthData.images[index].imageLinks.map(
                    (imageLink, imageIndex) => (
                      <Carousel.Item key={`${imageLink}-${imageIndex}`}>
                        <Zoom>
                          <Image
                            key={`${imageLink}-${imageIndex}`}
                            src={imageLink}
                            alt={image.desc}
                            fluid
                            rounded
                            style={{ height: "50vh" }}
                            className="object-fit-cover mx-2"
                          ></Image>
                        </Zoom>
                      </Carousel.Item>
                    )
                  )}
                </Carousel>

                <Card.Body>
                  <Card.Title>{image.desc}</Card.Title>
                  <Card.Text>placeholder</Card.Text>
                  <ListGroup>
                    <ListGroup.Item>
                      <strong>{image.rating}</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
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

export default HistoryDetails;
//<Card.Img variant="top" src={image.imageLinks[0]} /> image if needed
