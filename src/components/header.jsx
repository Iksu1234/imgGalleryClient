import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropleft from "react-bootstrap/NavDropdown";
import AddImage from "./addImage";
import DeleteImage from "./deleteImage";
import Info from "./info";
import Settings from "./settings";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Button from "react-bootstrap/Button";
import ShowRatings from "./showRatings";

function Header({
  isAdmin,
  isLoggedIn,
  triggerRefresh,
  images,
  ratingsData,
  changeScreen,
}) {
  const [isOpenAdd, setOpenAdd] = useState(false);
  const [isOpenDel, setOpenDel] = useState(false);
  const [isOpenInfo, setOpenInfo] = useState(false);
  const [isOpenRatings, setOpenRatings] = useState(false);
  const [isOpenSettings, setOpenSettings] = useState(false);

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
  const handleSettingModal = () => {
    setOpenSettings(false);
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
            <NavbarBrand>
              <Navbar.Brand className="mx-auto mt-25">
                <h2 className="text-info text-shadow px-5">
                  <strong>imgGallery</strong>
                </h2>
              </Navbar.Brand>
            </NavbarBrand>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Nav variant="pills">
              {isLoggedIn && (
                <Nav.Item>
                  <Button
                    className="box-shadow mx-2"
                    variant="secondary"
                    onClick={() => changeScreen("current")}
                  >
                    Current
                  </Button>
                </Nav.Item>
              )}
              {isLoggedIn && (
                <Nav.Item>
                  <Button
                    className="box-shadow mx-2"
                    variant="secondary"
                    onClick={() => changeScreen("history")}
                  >
                    History
                  </Button>
                </Nav.Item>
              )}
            </Nav>
            <div className="float-end">
              <Nav className="mx-auto">
                <NavDropleft
                  title={
                    <Button className="box-shadow" variant="secondary">
                      Menu
                    </Button>
                  }
                >
                  {isAdmin && (
                    <NavDropleft.Item onClick={setOpenAdd}>
                      Add images
                    </NavDropleft.Item>
                  )}
                  {isAdmin && (
                    <NavDropleft.Item onClick={setOpenDel}>
                      Delete images
                    </NavDropleft.Item>
                  )}
                  {isAdmin && (
                    <NavDropleft.Item onClick={setOpenRatings}>
                      Image ratings
                    </NavDropleft.Item>
                  )}
                  {isAdmin && (
                    <NavDropleft.Item onClick={setOpenSettings} disabled>
                      Settings
                    </NavDropleft.Item>
                  )}
                  <NavDropleft.Item onClick={setOpenInfo}>
                    Info
                  </NavDropleft.Item>
                </NavDropleft>
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
      <Settings
        show={isOpenSettings}
        handleClose={handleSettingModal}
        triggerRefresh={triggerRefresh}
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
