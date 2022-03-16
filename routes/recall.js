const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Require controller modules.
const recall_controller = require('../controllers/recallController')
//const api1_controller = require('../controllers/api1Controller')
const api2_controller = require('../controllers/api2Controller')
//const api3_controller = require('../controllers/api3Controller')
//const api4_controller = require('../controllers/api4Controller')

/// RECALL ROUTES ///

// GET recall home page.
router.get('/', recall_controller.index)

/// API1 ROUTES ///

/// API2 ROUTES ///
// GET main page
router.get('/api2', api2_controller.index)

// GET all record from the API
router.get('/api2/all', api2_controller.api2_get_recalls) 

// POST send a JSON file to the API
router.post('/api2', upload.single('file'), api2_controller.api2_post_json) 

// GET page to search category
router.get('/api2/category', api2_controller.api2_category) 

/// API3 ROUTES ///

/// API4 ROUTES ///

/// EXPORT ///
module.exports = router
