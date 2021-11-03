const mongoose = require('mongoose');

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
    default: Date.now
  }
});

module.exports = mongoose.model('Url', UrlSchema);
