var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'TransportCanada IT-02 Process # 20-MOT-EA-HRS-98277-2' });
	res.redirect('/recall');
});

module.exports = router;
