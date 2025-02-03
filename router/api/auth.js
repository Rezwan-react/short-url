const express = require('express');
const registration = require('../../controllers/auth/registration');
const login = require('../../controllers/auth/login');
const authRoute = express.Router();

authRoute.post("/registration", registration)

authRoute.post("/login", login)

module.exports = authRoute;