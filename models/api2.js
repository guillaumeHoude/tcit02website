/// imports ///
const fs = require('fs')

/// const ///

/// variables ///
// TODO import json file
let recalls = [
  {
    "recallNumber": "2015321",
    "manufactureName": "FORD",
    "makeName": "FORD",
    "modelName": "EXPLORER",
    "recallYear": "2016"
  },
  {
    "recallNumber": "2015436",
    "manufactureName": "FORD",
    "makeName": "FORD",
    "modelName": "EXPLORER",
    "recallYear": "2016"
  },
  {
    "recallNumber": "2015441",
    "manufactureName": "FORD",
    "makeName": "FORD",
    "modelName": "FUSION",
    "recallYear": "2016"
  }
]

/// Utils ///
// input file
const readJson = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, stringInput) => { // could use fs.read with fs.open if required
      if (error) {
        reject(error)
        return
      }

      resolve(JSON.parse(stringInput))
    })
  })
}

// TODO output file
const writeJson = (filePath) => {
	
}


/// Exports ///
// Allow the Controller access
exports.getRecalls = () => {
  return recalls
}

exports.getCategory = (category) => {
	// TODO filter
	return recalls
}