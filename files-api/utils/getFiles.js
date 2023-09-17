const fetch = require("node-fetch");

// Get files function which uses the endpoint url and a authorization token
async function getFiles(apiURl, token) {
  try {
    // Fetch files from API with authorization headers and GET method
    return await fetch(`${apiURl}/files`, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.error(err));
  } catch (error) {
    throw error;
  }
}

module.exports = getFiles;
