const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UrlSchema = new mongoose.Schema({
  _id: {
    type: Number
  },
  originalUrl: {
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
}, {_id: false});

UrlSchema.plugin(AutoIncrement);

module.exports = mongoose.model('Url', UrlSchema);
