var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('pages/index', {title: 'QR Code Generator'});
});

router.get('/editor', function(req, res, next) {
    res.render('pages/editor', {title: 'QR Code Editor'});
});

module.exports = router;