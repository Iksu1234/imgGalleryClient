import { ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function History({ historyData = { months: [] } }) {
  const [hasLoaded, setLoaded] = useState(false);

  useEffect(() => {
    if (historyData != null) {
      setLoaded(true);
    }
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
        <div>
          <ListGroup>
            {historyData.months.map((monthData, monthIndex) =>
              Object.entries(monthData).map(([monthName, monthDetails]) => (
                <div key={monthIndex}>
                  <h3 className="text-primary text-shadow">{monthName}</h3>
                  <ListGroup>
                    {monthDetails.images.map((image, imageIndex) => (
                      <ListGroup.Item
                        key={imageIndex}
                        className="mb-2"
                        variant="primary"
                      >
                        <h5>{image.desc}</h5>
                        <p>Rating: {image.rating}</p>
                        <div>
                          {image.imageLinks.map((link, linkIndex) => (
                            <img
                              key={linkIndex}
                              src={link}
                              alt={image.desc}
                              style={{
                                width: "100px",
                                height: "100px",
                                marginRight: "10px",
                                borderRadius: "5px",
                              }}
                            />
                          ))}
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ))
            )}
          </ListGroup>
        </div>
      )}
    </>
  );
}

export default History;
