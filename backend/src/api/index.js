var express = require('express');
var router = express.Router();
var short = require('./short');
var original = require('./original');

router.get('/', function(req, res, next) {
  res.render('index');
});
router.use('/', original);
router.use('/short', short);

module.exports = router;
