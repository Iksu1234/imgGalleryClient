import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AddImage from "./addImage";
import DeleteImage from "./deleteImage";
import Info from "./info";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Button from "react-bootstrap/Button";
import ShowRatings from "./showRatings";

function Header({ isAdmin, triggerRefresh, images, ratingsData }) {
  const [isOpenAdd, setOpenAdd] = useState(false);
  const [isOpenDel, setOpenDel] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenRatings, setOpenRatings] = useState(false);

  const handleAddModal = () => {
    setOpenAdd(false);
  };
  const handleDelModal = () => {
    setOpenDel(false);
  };
  const handleInfoModal = () => {
    setOpenInfo(false);
  };
  const handleRatingModal = () => {
    setOpenRatings(false);
  };

  return (
    <>
      <Navbar
        expand="md"
        className="jumbotron bg-transparent full-width-header header-font d-flex align-items-center justify-content-center text-center"
        style={{ height: "10vh" }}
      >
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-center">
            <NavbarBrand
              className="float-start mx-5"
              href="https://react-bootstrap.netlify.app/"
            >
              <img
                alt="react-bootstrap logo"
                src="https://react-bootstrap.netlify.app/img/logo.svg"
                width="45"
                height="45"
                className="d-inline-block align-top svg-shadow"
              />
            </NavbarBrand>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Navbar.Brand className="mx-auto mt-25">
              <h2 className="text-info text-shadow">
                <strong>imgGallery</strong>
              </h2>
            </Navbar.Brand>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="float-end mx-5">
              <Nav className="me-auto">
                <NavDropdown
                  title={
                    <Button className="box-shadow" variant="info">
                      Menu
                    </Button>
                  }
                >
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
                  {isAdmin && (
                    <NavDropdown.Item onClick={setOpenRatings}>
                      Image ratings
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item onClick={setOpenInfo}>
                    Info
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
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
      <ShowRatings
        show={isOpenRatings}
        handleClose={handleRatingModal}
        imagesData={images}
        ratingsData={ratingsData}
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
