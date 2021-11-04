var express = require('express');
var getOriginalCtrl = require('./original.ctrl');
const original = express.Router();

// redirect to original URL
original.get('/:shortUrl', getOriginalCtrl);

module.exports = original;



