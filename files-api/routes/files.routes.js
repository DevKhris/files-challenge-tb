const { Router } = require("express");

const router = Router();

const apiURL = "https://echo-serv.tbxnet.com/v1/secret/";
const getFiles = require("../utils/getFiles");

router.get("/data", async (req, res) => {
  const filesData = await getFiles(apiURL);

  res.json(filesData);
});

module.exports = router;
