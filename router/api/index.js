const express = require('express');
const authRoute = require('./auth');
const shortRoute = require('./shorturl');
const valiUser = require('../../middlewares/authMiddlewares');
const apiRoute = express.Router();

apiRoute.use("/auth", authRoute)

apiRoute.use("/generate", valiUser, shortRoute)

module.exports = apiRoute;