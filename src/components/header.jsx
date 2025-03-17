import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// eslint-disable-next-line react/prop-types
function Header({ isAdmin }) {
  return (
    <>
      <Navbar
        expand="lg"
        className="jumbotron bg-primary full-width-header header-font"
        style={{ height: "10vh" }}
      >
        <Row className="w-100">
          <Col>
            <div className="float-start mx-3">
              <img
                alt=""
                src="https://react-bootstrap.netlify.app/img/logo.svg"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </div>
          </Col>
          <Col>
            <Navbar.Brand className="m-0">
              <h2>Image Gallery</h2>
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <div className="float-end mx-3">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="Menu" id="basic-nav-dropdown">
                    {isAdmin && (
                      <NavDropdown.Item href="#action/add_images">
                        Add images
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Item href="">Info</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Col>
        </Row>
      </Navbar>
    </>
  );
}

export default Header;
