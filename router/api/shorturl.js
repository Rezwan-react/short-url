const express = require('express');
const makeShorturl = require('../../controllers/shorturl/makeShorturl');
const shortRoute = express.Router();

shortRoute.post("/shortUrl", makeShorturl)


module.exports = shortRoute;