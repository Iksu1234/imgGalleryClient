const API_URL = import.meta.env.VITE_URL;

//GET images data from api
export const fetchImages = async () => {
  try {
    const response = await fetch(API_URL + "/images");
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//GET ratings data from api
export const fetchRatings = async () => {
  try {
    const response = await fetch(API_URL + "/ratings");
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//GET history data from api
export const fetchHistory = async () => {
  try {
    const response = await fetch(API_URL + "/history");
    return response.json();
  } catch (error) {
    console.error(error.message);
  }
};

//DELETE images from api
export const deleteImages = async (images) => {
  try {
    fetch(API_URL + "/images", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(images),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete images");
      } else {
        alert("Images deleted successfully");
      }
    });
  } catch (error) {
    error.message = "Failed to delete images";
  }
};
/*
//PATCH ratings to api
export const patchRatings = async (ratings) => {
  await fetch(API_URL + "/ratings", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ratings),
  })
    .then((response) => response)
    .then((data) => {
      console.log("response:" + data.status);
      alert("Ratings sent successfully");
      return true;
    })
    .catch((error) => {
      console.log("error sending ratings: " + error.message);
      alert("Failed to send ratings: " + error.message);
    });
};*/
export const patchRatings = async (ratings) => {
  try {
    const response = await fetch(API_URL + "/ratings", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ratings),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("error sending ratings: " + errorText);
      alert("Failed to send ratings: " + errorText);
      return { ok: false, status: response.status, error: errorText };
    }

    const data = await response.json().catch(() => null);
    console.log("response:", response.status);
    alert("Ratings sent successfully");
    return { ok: true, status: response.status, data };
  } catch (error) {
    console.log("error sending ratings: " + error.message);
    alert("Failed to send ratings: " + error.message);
    return { ok: false, status: null, error: error.message };
  }
};

//PATCH images to api
export const patchImages = async (images) => {
  try {
    await fetch(API_URL + "/images", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(images),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to patch images");
      } else {
        alert("Images patched successfully");
      }
    });
  } catch (error) {
    error.message = "Failed to patch images";
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
