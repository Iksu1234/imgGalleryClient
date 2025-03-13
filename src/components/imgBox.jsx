import Zoom from "react-medium-image-zoom";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { fetchImages, patchRatings } from "../services/apiService";

function ImgBox() {
  const [jsonData, setJsonData] = useState({ images: [] });

  async function getImageData() {
    try {
      const response = await fetchImages();
      setJsonData(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <>
      <Container className="pageWrapper">
        {jsonData.images.map((image, index) => (
          <Stack key={`d${index}`} gap={3} className="mb-4">
            <h2>{image.desc}</h2>
            <Stack direction="horizontal" gap={3} className="imageWrapper">
              {image.imageLinks.map((link, linkIndex) => (
                <div key={`z${linkIndex}`} className="img-box">
                  <Zoom>
                    <Image
                      src={link.imageLink}
                      fluid
                      rounded
                      alt={`${image.person} - ${image.desc}`}
                    />
                  </Zoom>
                </div>
              ))}
            </Stack>
            <Form className="w-25 mx-auto">
              <Form.Control
                key={`r${index}`}
                id={`r${index}`}
                type="number"
                min={1}
                max={10}
                step={0.1}
                placeholder="rating 1-10"
              />
            </Form>
          </Stack>
        ))}
        <Button
          variant="primary"
          className="w-25 mx-auto"
          type="submit"
          onClick={sendRatings}
        >
          Submit
        </Button>
      </Container>
    </>
  );
  function sendRatings() {
    const ratings = [];
    for (let i = 0; i < jsonData.images.length; i++) {
      const rating = Number(document.getElementById(`r${i}`).value);
      if (rating < 1 || rating > 10 || isNaN(rating)) {
        alert("Ratings must be between 1 and 10");
        return;
      } else {
        ratings.push(rating);
      }
    }
    try {
      patchRatings(ratings);
    } catch (error) {
      error.message = "Failed to send ratings";
    }
  }
}

export default ImgBox;
