import { useState, useEffect } from "react";
import ImgBox from "./imgBox";
import Login from "./login";
import Header from "./header";
import Footer from "./footer";
import History from "./history";

import {
  fetchImages,
  fetchRatings,
  fetchHistory,
} from "../services/apiService";

function ImgGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [imagesData, setImagesData] = useState({ images: [] });
  const [ratingsData, setRatingsData] = useState({ ratings: [] });
  const [historyData, setHistoryData] = useState({ months: [] });
  const [visibleScreen, setVisibleScreen] = useState("current");

  const handleLoginSuccess = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const triggerRefresh = async () => {
    console.log("trigger refresh");
    getImageData();
  };

  const changeScreen = async (screen) => {
    console.log("change screen: " + screen);
    setVisibleScreen(screen);
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

      setRatingsData(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getHistoryData = async () => {
    try {
      const response = await fetchHistory();
      console.log("fetch history result: " + JSON.stringify(response));

      setHistoryData(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      getImageData();
      getRatingData();
      getHistoryData();
    }
  }, [isLoggedIn]);

  return (
    <>
      <div>
        <Header
          isAdmin={isAdmin}
          triggerRefresh={triggerRefresh}
          images={imagesData}
          ratingsData={ratingsData}
          changeScreen={changeScreen}
        />
        {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
        {isLoggedIn && visibleScreen === "history" && (
          <History historyData={historyData} />
        )}
        {isLoggedIn && visibleScreen === "current" && (
          <ImgBox imagesData={imagesData} />
        )}
      </div>
      <Footer isLoggedIn={isLoggedIn} />
    </>
  );
}

export default ImgGallery;
