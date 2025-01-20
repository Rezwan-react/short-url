const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const shortUrl = new Schema({
  url: {
    typr :  String,
    required : true
  },
  shortId : String
});

module.exports = mongoose.model('shortUrl', shortUrl);
