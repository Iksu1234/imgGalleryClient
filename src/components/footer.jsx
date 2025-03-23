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
            <a href="https://react-bootstrap.netlify.app/">
              <img
                alt="react-bootstrap logo"
                src="https://react-bootstrap.netlify.app/img/logo.svg"
                width="25vw"
                height="25vh"
                className="d-inline-block align-top svg-shadow mx-3"
              />
            </a>
            <a
              href="
            https://github.com/Iksu1234"
            >
              <img
                alt="github logo"
                src="../images/github.svg"
                width="25vw"
                height="25vh"
                className="d-inline-block align-top svg-shadow mx-3"
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
