const fetch = require("node-fetch");
const { parse } = require("csv-parse");

async function getFormatCsv(apiURL, file, token) {
  try {
    let results = "";
    await fetch(`${apiURL}/file/${file}`, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.text())
      .then((result) => {
        results = parseCSV(result);
      })
      .catch((err) => console.error(err));
    return results;
  } catch (error) {
    throw error;
  }
}

function parseCSV(csv) {
  let formatData = [];
  parse(csv, {
    columns: true,
    group_columns_by_name: true,
    bom: false,
    skip_empty_lines: true,
    skip_records_with_empty_values: true,
    skip_records_with_error: true,
  }).on("data", (data) => {
    formatData.push(data);
  });

  return formatData;
}

module.exports = getFormatCsv;
