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
  },
  isAuth: {
    type: Boolean,
    default: false
  },
  visitHistory: [{
    clickedAt: {
      type: Date,
    }
  }]
});

module.exports = mongoose.model('shortUrl', shortUrl);
