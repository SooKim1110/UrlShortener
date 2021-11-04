const express = require('express');
const {postShortCtrl, getShortCtrl} = require('./short.ctrl');
const short = express.Router();

// generate shortened url
short.post('/', postShortCtrl);

// error if requesting /short with get method
short.get('/', getShortCtrl);

module.exports = short;