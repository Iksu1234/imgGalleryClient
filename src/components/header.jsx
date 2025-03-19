import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AddImage from "./addImage";
import DeleteImage from "./deleteImage";
import Info from "./info";

function Header({ isAdmin, triggerRefresh, images }) {
  const [isOpenAdd, setOpenAdd] = useState(false);
  const [isOpenDel, setOpenDel] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);

  const handleAddModal = () => {
    setOpenAdd(false);
  };
  const handleDelModal = () => {
    setOpenDel(false);
  };
  const handleInfoModal = () => {
    setOpenInfo(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="jumbotron bg-primary full-width-header header-font"
        style={{ height: "10vh" }}
      >
        <Row className="w-100">
          <Col>
            <div className="float-start mx-5 w-50">
              <img
                alt=""
                src="https://react-bootstrap.netlify.app/img/logo.svg"
                width="45"
                height="45"
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
            <div className="float-end mx-5 w-50">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="asd" id="basic-nav-dropdown">
                    {isAdmin && (
                      <NavDropdown.Item onClick={setOpenAdd}>
                        Add images
                      </NavDropdown.Item>
                    )}
                    {isAdmin && (
                      <NavDropdown.Item onClick={setOpenDel}>
                        Delete images
                      </NavDropdown.Item>
                    )}
                    <NavDropdown.Item onClick={setOpenInfo}>
                      Info
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Col>
        </Row>
      </Navbar>
      <AddImage
        show={isOpenAdd}
        handleClose={handleAddModal}
        triggerRefresh={triggerRefresh}
      />
      <DeleteImage
        show={isOpenDel}
        handleClose={handleDelModal}
        triggerRefresh={triggerRefresh}
        imagesData={images}
      />
      <Info
        show={isOpenInfo}
        handleClose={handleInfoModal}
        triggerRefresh={triggerRefresh}
      />
    </>
  );
}

export default Header;
