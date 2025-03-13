import { useState } from "react";
import ImgBox from "./imgBox";
import Login from "./login";

function ImgGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <ImgBox />}
    </>
  );
}

export default ImgGallery;
