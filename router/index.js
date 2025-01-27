const express = require('express');
const apiRoute = require('./api');
const renderUrl = require('../controllers/shorturl/renderUrl');
const { homePage, registrationPage, loginPage } = require('./staticSites');
const router = express.Router();

router.use("/api/v1", apiRoute)

router.get("/:shortId", renderUrl)

router.get('/', homePage);

router.get("/registrationPage", registrationPage);

router.get("/loginPage", loginPage);

router.use((req, res) => {
    res.send("page not found!");
})

module.exports = router;



