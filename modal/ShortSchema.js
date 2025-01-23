const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortUrl = new Schema({
  url: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('shortUrl', shortUrl);
