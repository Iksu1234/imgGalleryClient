const API_URL = import.meta.env.VITE_URL;

//Get images data from api
export const fetchImages = async () => {
  try {
    const response = await fetch(API_URL + "/images");
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//PATCH ratings to api
export const patchRatings = async (ratings) => {
  try {
    fetch(API_URL + "/ratings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratings),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to send ratings");
      } else {
        alert("Ratings sent successfully");
      }
    });
  } catch (error) {
    error.message = "Failed to send ratings";
  }
};

//POST login to api
export const postLogin = async (account, password) => {
  try {
    const response = fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{ "user": "${account}", "password": ${password}}`,
    });
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
