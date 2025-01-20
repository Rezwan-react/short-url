const express = require('express');
const registration = require('../../controllers/auth/registration');
const login = require('../../controllers/auth/login');
const authRoute = express.Router();

authRoute.get("/registration", registration)

authRoute.get("/login", login)

module.exports = authRoute;