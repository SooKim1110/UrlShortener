const validator = require('validator');

const isValidUrl = (url) => {
  return validator.isURL(url);
}

module.exports = isValidUrl;