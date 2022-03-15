// We could also include the next function to be called if the method does not complete the request cycle
const async = require('async')
let Recall = require('../models/api2')
// let utils = require('../helpers/helpers') // readfile

exports.index = function (req, res) {
    res.render('api2', { title: 'Recall API2'})
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
// Display detail page for a specific recall.
exports.api2_recall_category_search = function (req, res) { // returns json file with category matching entries
    res.send('NOT IMPLEMENTED: Recall list category search: ' + req.params.category)
}

// Display detail page for a specific recall.
exports.api2_recall_detail = function (req, res) { // returns 1 entry where the recall number is the same
    res.send('NOT IMPLEMENTED: Recall detail: ' + req.params.id)
}

// Display recall update form on GET.
exports.api2_recall_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Recall update GET')
}

// Handle recall update on POST.
exports.api2_recall_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Recall update POST')
}

/// CONTACTING API2 ///
const https = require("https")
const http = require("http")

exports.api2_all = function (req, result) {
  let url = 'http://localhost:3002/api2/all'
  
  let request = http.get(url, (res) => {
		console.log(`statusCode: ${res.statusCode}`)
		
		if (res.statusCode !== 200) {
			console.error(`Did not get an OK from the server. Code: ${res.statusCode} Result: ${res.statusMessage}`);
			res.resume();
			return;
		}
		
		let data = '';

		//on data event, append datachunk
		res.on('data', (chunk) => {
			console.log('data in');
			data += chunk;
		});

    res.on('end', () => {
			console.log('end');
		});
    
		//when everything is sent, convert data to JSON
		res.on('close', () => {
			console.log('close: Retrieved all data');
			//console.log(JSON.parse(data)); //This will return json object, if we want to read it //JSON.stringify() or leave as data
			result.json(JSON.parse(data))
		});
	});

	request.on('error', (err) => {
		console.error(`Encountered an error trying to make a request: ${err.message}`);
	});
	
	request.end();
}