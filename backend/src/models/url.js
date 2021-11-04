const mongoose = require('mongoose');
const moment_tz = require('moment-timezone');
const dateKorea = moment_tz.tz(Date.now(), "Asia/Seoul");

const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  createCount: {
    type: Number,
    required: true,
    default: 0
  },
  visitCount: {
    type: Number,
    required: true,
    default: 0
  },
  createDate: {
    type: Date,
    default: dateKorea
  }
});

module.exports = mongoose.model('Url', UrlSchema);
