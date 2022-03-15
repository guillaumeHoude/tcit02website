const axios = require('axios').default;
const https = require('https')
const http = require('http')
const FormData = require('form-data')
const fs = require('fs');
//const async = require('async')


/// initializations ///
axios.defaults.httpsAgent = https.Agent({rejectUnauthorized: false}) //otherwise the data.tc.gc.ca/ returns a cert issue (https://github.com/axios/axios/issues/535)

//in a bigger project I'd define this elsewhere
const api2All = 'http://localhost:3002/api2/all'
const api2Category = 'http://localhost:3002/api2/category/'

//let Recall = require('../models/api2')

// GET main page
exports.index = function (req, res) {
    res.render('api2', { title: 'Recall API2'})
}

// GET all record from the API
exports.api2_get_all = function (req, res) {
  axios.get(api2All)
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
  
  axios.post(api2All, formData, { headers:  formData.getHeaders() })
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
    axios.get(api2Category+req.query.category)
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
  // TODO
  
  
}

// GET all record of category
exports.api2_category_search = function (req, res) {
  axios.get(api2Category+req.params.category)
  .then(response => {
    res.json(response.data)
  }).catch(error => {
    console.error(error.message)
    console.error(error.stack)
    res.send(error)
  })
}

// Display list of all recalls.
/*exports.api2_all = function (req, res) { // returns json file
	let fileLocation = './files/api2Output.json' // location based on root app (app.js)
	
  //res.json(Recall.getRecalls()) // return from model no attachment
	//res.attachment().json(Recall.getRecalls()) // return from model as attachment
	//res.attachment(fileLocation) // on it's own this doesn't work (it only sets disposition and type)
	res.download(fileLocation, (err) => {err ? next(err) : console.log('Sent:', fileLocation)}) //doc says (path [, filename] [, options] [, fn]) but in reality it's (path [, filename [, options]] [, fn])
	//res.sendfile(fileLocation, (err) => {err ? next(err) : console.log('Sent:', fileLocation)}) // file as is
}
*/
