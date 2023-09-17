const fetch = require("node-fetch");
const { parse } = require("csv-parse");

// function to get a formatted csv result which uses the endpoint url
// for each file using the file parameter and a authorization token
async function getFormattedCsv(apiURL, file, token) {
  try {
    let formattedData;
    await fetch(`${apiURL}/file/${file}`, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.text({}))
      .then(async (result) => (formattedData = parseCSV(result)))
      .catch((err) => console.error(err));

    return formattedData;
  } catch (error) {
    throw error;
  }
}

//  function to parse csv string to object using csv parser
function parseCSV(csv) {
  const records = [];
  parse(csv, {
    columns: true,
    group_columns_by_name: true,
    bom: false,
    skip_empty_lines: true,
    skip_records_with_empty_values: true,
    skip_records_with_error: true,
    info: true,
  }).on("data", (data) => {
    records.push(data.record);
  });

  return records;
}

module.exports = getFormattedCsv;
