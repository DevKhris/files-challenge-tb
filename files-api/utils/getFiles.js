const fetch = require("node-fetch");

const token = "Bearer aSuperSecretKey";

async function getFiles(apiURl) {
  try {
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
