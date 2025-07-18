import Zoom from "react-medium-image-zoom";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { patchRatings } from "../services/apiService";
import { useEffect, useState } from "react";

function ImgBox({ imagesData }) {
  const [sendingRatings, setSending] = useState(false);
  const [ratingsSent, setSent] = useState(false);
  const [hasLoaded, setLoaded] = useState(false);
  const imageList = imagesData;

  useEffect(() => {
    if (imageList != null) {
      setLoaded(true);
    }
  }, [imageList]);
  return (
    <>
      {!hasLoaded && (
        <Spinner
          animation="border"
          variant="info"
          style={{ marginBottom: "80vh", marginTop: "40vh" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {hasLoaded && (
        <Container className="pageWrapper bg-card box-shadow mb-4">
          {imageList.images.map((image, index) => (
            <Stack key={`d${index}`} gap={3} className="mb-4">
              <h2 className="text-shadow">
                <strong>{image.desc}</strong>
              </h2>
              <Stack direction="horizontal" gap={3} className="imageWrapper">
                {image.imageLinks.map((link, linkIndex) => (
                  <div key={`z${linkIndex}`} className="img-box">
                    <Zoom>
                      <Image
                        src={link}
                        className="box-shadow"
                        fluid
                        rounded
                        alt={`${image.person} - ${image.desc}`}
                      />
                    </Zoom>
                  </div>
                ))}
              </Stack>
              <Form className="w-25 mx-auto box-shadow">
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
            variant="info"
            className="w-25 mx-auto box-shadow"
            type="submit"
            disabled={sendingRatings || ratingsSent}
            onClick={sendRatings}
          >
            {!sendingRatings && <p className="spinner-button">Submit</p>}
            {sendingRatings && (
              <div className="button-spinner">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              </div>
            )}
          </Button>
        </Container>
      )}
    </>
  );
  async function sendRatings() {
    setSending(true);
    const ratings = [];
    for (let i = 0; i < imageList.images.length; i++) {
      const rating = Number(document.getElementById(`r${i}`).value);
      if (rating < 1 || rating > 10 || isNaN(rating)) {
        alert("Ratings must be between 1 and 10");
        setSending(false);
        return;
      } else {
        ratings.push(rating);
      }
    }
    console.log("ratings: " + ratings);
    const result = await patchRatings(ratings);
    if (result.ok) {
      setSent(true);
    }
    setSending(false);
  }
}

export default ImgBox;
