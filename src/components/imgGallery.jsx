import { useState, useEffect } from "react";
import ImgBox from "./imgBox";
import Login from "./login";
import Header from "./header";
import { fetchImages } from "../services/apiService";

function ImgGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [images, setImages] = useState({ images: [] });

  const handleLoginSuccess = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const triggerRefresh = async () => {
    console.log("trigger refresh");
    getImageData();
  };

  async function getImageData() {
    try {
      const response = await fetchImages();
      console.log("fetch images result: " + JSON.stringify(response));
      setImages(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getImageData();
  }, []);

  return (
    <>
      <Header
        isAdmin={isAdmin}
        triggerRefresh={triggerRefresh}
        images={images}
      />
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <ImgBox images={images} />}
    </>
  );
}

export default ImgGallery;
