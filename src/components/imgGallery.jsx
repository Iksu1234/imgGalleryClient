import { useState } from "react";
import ImgBox from "./imgBox";
import Login from "./login";
import Header from "./header";

function ImgGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLoginSuccess = (adminStatus) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  return (
    <>
      <Header isAdmin={isAdmin} />
      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
      {isLoggedIn && <ImgBox />}
    </>
  );
}

export default ImgGallery;
