import {
  ListGroup,
  Container,
  Carousel,
  Button,
  Stack,
  Image,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import HistoryDetails from "./historyDetails";

function History({ historyData = { months: [] } }) {
  const [hasLoaded, setLoaded] = useState(false);
  const [isOpenDetail, setOpenDetail] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);
  const [monthName, setMonthName] = useState("");

  const handleDetailModal = () => {
    setOpenDetail(false);
  };

  const openDetailModal = (monthIndex, monthName) => {
    const monthData = historyData.months[monthIndex]?.[monthName]; // Access the specific month by name
    if (!monthData) {
      console.error("Invalid month index or name:", monthIndex, monthName);
      return;
    }

    setMonthIndex(monthIndex); // Set the selected month index
    setMonthName(monthName); // Set the selected month name
    console.log("Opening details for month:", monthName, "Data:", monthData);

    setOpenDetail(true); // Open the modal
  };

  //const [shownMonths, setShownMonths] = useState([]);

  /*
  const showMonthDetails = (e) => {
    const month = e.target.innerText;
    if (shownMonths.includes(month)) {
      setShownMonths(shownMonths.filter((m) => m !== month));
      return;
    }
    setShownMonths([...shownMonths, month]);
  };*/

  const carouselImages = (images) => {
    return images.slice(0, 3);
  };

  useEffect(() => {
    if (historyData != null) {
      setLoaded(true);
    }
    console.log(historyData);
  }, [historyData]);

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
        <Container className="pageWrapper">
          <ListGroup className="">
            {historyData.months.map((monthData, monthIndex) =>
              Object.entries(monthData).map(([monthName, monthDetails]) => (
                <div
                  key={`${monthName}-${monthIndex}`}
                  className="mb-4 p-4 bg-card box-shadow"
                >
                  <h2 className="text-shadow mb-4">
                    <strong>{monthName}</strong>
                  </h2>
                  <Carousel
                    key={`${monthName}-${monthIndex}`}
                    className="mb-4 carousel-history"
                    interval={null}
                  >
                    {monthDetails.images.map((image, imageIndex) => (
                      <Carousel.Item key={`${image}-${imageIndex}`}>
                        <Stack
                          direction="horizontal"
                          gap={3}
                          className="imageWrapper d-flex justify-content-center"
                        >
                          {carouselImages(image.imageLinks).map(
                            (link, linkIndex) => (
                              <Image
                                key={`${monthName}-${imageIndex}-${linkIndex}`}
                                src={link}
                                alt={image.desc}
                                fluid
                                style={{ width: "25vh", height: "25vh" }}
                                className="object-fit-cover box-shadow mx-2 rounded img-box"
                              />
                            )
                          )}
                        </Stack>
                        <Carousel.Caption>
                          <h3>
                            <strong className="bg-card px-2 py-1">
                              {image.desc}
                            </strong>
                          </h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <Button
                    variant="secondary"
                    className="box-shadow"
                    onClick={() => openDetailModal(monthIndex, monthName)}
                  >
                    Details
                  </Button>
                </div>
              ))
            )}
          </ListGroup>
          <HistoryDetails
            show={isOpenDetail}
            handleClose={handleDetailModal}
            monthName={monthName || "placeholder"}
            monthData={
              historyData.months[monthIndex]?.[monthName] || { images: [] }
            }
          />
        </Container>
      )}
    </>
  );
}

export default History;
