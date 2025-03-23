import { ListGroup, Form } from "react-bootstrap";

function History({ imagesData }) {
  console.log("imagesList: " + imagesData);
  return (
    <ListGroup>
      {imagesData.images.map((image, index) => (
        <Form key={index}>
          <ListGroup.Item key={index} variant="success" className="mb-2">
            {image.desc}
          </ListGroup.Item>
        </Form>
      ))}
    </ListGroup>
  );
}

export default History;
