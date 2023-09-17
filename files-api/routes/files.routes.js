const { Router } = require("express");
const router = Router();

const apiURL = "https://echo-serv.tbxnet.com/v1/secret";
const token = "Bearer aSuperSecretKey";
const getFiles = require("../utils/getFiles");
const getFormattedCsv = require("../utils/getFormattedCsv");

router.get("/data", async (req, res) => {
  try {
    const results = [];
    const filesData = await getFiles(apiURL, token);
    //  loop trough the file name list and get the formatted csv's then push to array
    for (fileName of filesData.files) {
      const result = await getFormattedCsv(apiURL, fileName, token);
      results.push(result);
    }

    // search by query param with flatting and filtering the results array
    if (req.query.fileName) {
      let fileName = req.query.fileName;
      const filteredResult = results
        .flat()
        .filter((obj) => obj.file === fileName);
      res.json(filteredResult).status(200);
    } else {
      res.json(results.flat()).status(200);
    }
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(500);
  }
});

router.get("/list", async (_, res) => {
  try {
    const filesData = await getFiles(apiURL, token);

    res.json(filesData).status(200);
  } catch (err) {
    res
      .json({
        message: err.message,
      })
      .status(500);
  }
});

module.exports = router;
