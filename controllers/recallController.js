// We could also include the next function to be called if the method does not complete the request cycle
const async = require('async')
// let utils = require('../helpers/helpers') // readfile

exports.index = function (req, res) {
    res.render('index', { title: 'Recall Home'})
}