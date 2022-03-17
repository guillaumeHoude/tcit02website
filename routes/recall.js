const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Require controller modules.
const recall_controller = require('../controllers/recallController')
const api1_controller = require('../controllers/api1Controller')
const api2_controller = require('../controllers/api2Controller')
//const api3_controller = require('../controllers/api3Controller')
//const api4_controller = require('../controllers/api4Controller')

/// RECALL ROUTES ///

// GET recall home page.
router.get('/', recall_controller.index)

/// API1 ROUTES ///
router.get("/api1", api1_controller.index); // GET main page
router.get("/api1/all", api1_controller.api1_get_recalls); // GET all record from the API
router.post("/api1", upload.single("file"), api1_controller.api1_post_json); // POST send a JSON file to the API
router.get( // GET page to search category
  "/api1/manufacturerRecallNumber",
  api1_controller.api1_manufacturerRecallNumber
);

/// API2 ROUTES ///
router.get('/api2', api2_controller.index) // GET main page
router.get('/api2/all', api2_controller.api2_get_recalls) // GET all record from the API
router.post('/api2', upload.single('file'), api2_controller.api2_post_json) // POST send a JSON file to the API
router.get('/api2/category', api2_controller.api2_category) // GET page to search category

/// API3 ROUTES ///

/// API4 ROUTES ///

/// EXPORT ///
module.exports = router
