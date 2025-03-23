import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState, useEffect } from "react";

function Footer({ isLoggedIn }) {
  const [footerState, setState] = useState({ position: "absolute" });
  useEffect(() => {
    if (isLoggedIn) {
      setState({ position: "inherit" });
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="footer" style={footerState}>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col className="m-1">
            <a
              href="
            https://github.com/Iksu1234"
            >
              <img
                alt="github logo"
                src="../public/images/github.svg"
                width="25vw"
                height="25vh"
                className="svg-shadow"
                color="white"
              ></img>
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
