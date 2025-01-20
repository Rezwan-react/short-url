const express = require('express');
const authRoute = require('./auth');
const shortRoute = require('./shorturl');
const apiRoute = express.Router();

apiRoute.use("/auth", authRoute)

apiRoute.use("/generate", shortRoute)

module.exports = apiRoute;