const axios = require('axios').default;
const https = require('https')
const http = require('http')
const FormData = require('form-data')


/// initializations ///
axios.defaults.httpsAgent = https.Agent({rejectUnauthorized: false}) //otherwise the data.tc.gc.ca/ returns a cert issue (https://github.com/axios/axios/issues/535)

//in a bigger project I'd define this elsewhere
const api2Url = 'http://localhost:3002/api2'

// GET main page
exports.index = function (req, res) {
    res.render('api2', { title: 'Recall API2'})
}

// GET all record from the API
exports.api2_get_recalls = function (req, res) {
  axios.get(api2Url)
  .then(response => {
    // response object has 3 variables: statusCode, headers and body. We usually only want to show the body
    res.json(response.data)
  }).catch(error => {
    console.error(error.message)
    console.error(error.stack)
    res.send(error)
  })
}

// POST send a JSON file to the API
exports.api2_post_json = function (req, res) {
  let formData = new FormData()
  formData.append('file', req.file.buffer, { filename : 'input.json' });
  
  axios.post(api2Url, formData, { headers:  formData.getHeaders() })
  .then(response => {
    // axios' response object: { data, status, statusText, headers, config and request }
    res.json(response.data)
  }).catch(error => {
    console.error(error.message)
    console.error(error.stack)
    res.send(error)
  })
  //res.send(`Request object: ${JSON.stringify(req.file)}`)
}

// GET page to search category/
exports.api2_category = function (req, res) {
  //req.body.category
  //req.params.category
  if(req.query.category) {
    axios.get(api2Url+'?category='+req.query.category)
      .then(response => {
      res.json(response.data)
    }).catch(error => {
      if(error.response){
        console.error(`error.response.status`)
        console.error(`error.response.data`)
        console.error(`error.response.data`)
      }
      console.error(error.message)
      console.error(error.stack)
      res.send(error)
    })
  }else{
    res.render('api2_category', { title: `Recall API2 ${ JSON.stringify(req.query) }`})
  }
}

