var express = require('express');
var getOriginalCtrl = require('./original.ctrl');
const original = express.Router();

original.get('/:shortUrl', getOriginalCtrl);

module.exports = original;



