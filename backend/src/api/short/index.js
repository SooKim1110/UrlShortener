var express = require('express');
var postShortCtrl = require('./short.ctrl');
const short = express.Router();

// generate shortened url
short.post('/', postShortCtrl);

module.exports = short;