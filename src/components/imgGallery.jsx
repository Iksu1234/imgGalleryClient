import { useState, useEffect } from "react";
import ImgBox from "./imgBox";
import Login from "./login";
import Header from "./header";
import { fetchImages, fetchRatings } from "../services/apiService";

function ImgGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imagesData, setImagesData] = useState({ images: [] });
  const [ratingsData, setRatingsData] = useState({ ratings: [] });

  const handleLoginSuccess = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const triggerRefresh = async () => {
    console.log("trigger refresh");
    getImageData();
  };

  const getImageData = async () => {
    try {
      const response = await fetchImages();
      console.log("fetch images result: " + JSON.stringify(response));
      setImagesData(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getRatingData = async () => {
    try {
      const response = await fetchRatings();
      console.log("fetch ratings result: " + JSON.stringify(response));

      const ratingsMeans = response.map((ratingArray) => {
        const sum = ratingArray.reduce((acc, value) => acc + value, 0);
        const calc = sum / ratingArray.length;
        return calc.toFixed(2);
      });

      setRatingsData(ratingsMeans);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getImageData();
    getRatingData();
  }, []);

  return (
    <>
      <Header
        isAdmin={isAdmin}
        triggerRefresh={triggerRefresh}
        images={imagesData}
        ratingsData={ratingsData}
      />
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <ImgBox imagesData={imagesData} />}
    </>
  );
}

export default ImgGallery;
