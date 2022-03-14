const express = require('express')
const router = express.Router()

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
// GET request to update Recall.
router.get('/api2', api2_controller.index)

// GET request to update Recall.
router.get('/api2/:id/update', api2_controller.api2_recall_update_get)

// POST request to update Recall.
router.post('/api2/recall-number/:id/update', api2_controller.api2_recall_update_post)

// GET request for one Recall.
router.get('/api2/recall-number/:id', api2_controller.api2_recall_detail) // returns 1 entry base on recall number

// GET request for one Recall.
router.get('/api2/category/:category', api2_controller.api2_recall_category_search) // returns json file where category match in either fr or en

// GET request for list of all Recall items.
router.get('/api2/all', api2_controller.api2_all) // returns json file

/// API3 ROUTES ///

/// API4 ROUTES ///

/// EXPORT ///
module.exports = router
