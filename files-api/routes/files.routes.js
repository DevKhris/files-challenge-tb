const { Router, json } = require("express");
const router = Router();

const apiURL = "https://echo-serv.tbxnet.com/v1/secret";
const token = "Bearer aSuperSecretKey";
const getFiles = require("../utils/getFiles");
const getFormatCsv = require("../utils/getFormatCsv");

router.get("/data", async (req, res) => {
  const filesData = await getFiles(apiURL, token);
  const results = [];

  for (file of filesData.files) {
    let result = await getFormatCsv(apiURL, file, token);

    results.push(result);
  }

  res.json(results.flat()).status(200);
});

router.get("/list", async (req, res) => {
  const filesData = await getFiles(apiURL, token);

  res.json(filesData).status(200);
});

module.exports = router;
