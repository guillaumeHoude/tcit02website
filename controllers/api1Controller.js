const axios = require("axios").default;
const https = require("https");
const FormData = require("form-data");

/// initializations ///
axios.defaults.httpsAgent = https.Agent({ rejectUnauthorized: false }); //otherwise the data.tc.gc.ca/ returns a cert issue (https://github.com/axios/axios/issues/535)

//in a bigger project I'd define this elsewhere
const api1Url =
  "https://manufacturer-recall-number-api.herokuapp.com/api/recalls";

// GET main page
exports.index = function (req, res) {
  res.render("api1", { title: "Recall API1" });
};

// GET all record from the API
exports.api1_get_recalls = function (req, res) {
  axios
    .get(api1Url)
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      if (error.response) {
        res.status(error.response.status).send(error.message);
        console.error(error.response.data);
      } else {
        res.send(error.message);
      }
    });
};

// POST send a JSON file to the API
exports.api1_post_json = function (req, res) {
  let formData = new FormData();
  formData.append("file", req.file.buffer, { filename: "input.json" });

  axios
    .post(api1Url, formData, { headers: formData.getHeaders() })
    .then((response) => {
      // axios' response object: { data, status, statusText, headers, config and request }
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      if (error.response) {
        res.status(error.response.status).send(error.message);
        console.error(error.response.data);
      } else {
        res.send(error.message);
      }
    });
};

// GET page to search manufacturerRecallNumber/
exports.api1_manufacturerRecallNumber = function (req, res) {
  if (req.query.manufacturerRecallNumber) {
    axios
      .get(api1Url + "/" + req.query.manufacturerRecallNumber)
      .then((response) => {
        res.status(response.status).json(response.data);
      })
      .catch((error) => {
        if (error.response) {
          res.status(error.response.status).send(error.message);
          console.error(error.response.data);
        } else {
          res.send(error.message);
        }
      });
  } else {
    res.render("api1_manufacturerRecallNumber", {
      title: `Recall API1 ${JSON.stringify(req.query)}`,
    });
  }
};
