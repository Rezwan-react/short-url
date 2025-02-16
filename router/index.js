const express = require('express');
const apiRoute = require('./api');
const { renderUrl, visitHistory } = require('../controllers/shorturl/renderUrl');
const { homePage, registrationPage, loginPage } = require('./staticSites');
const valiUser = require('../middlewares/authMiddlewares');
const router = express.Router();

router.use(process.env.BASE_API, apiRoute)


router.get('/', homePage);

router.get("/loginPage", loginPage);

router.get("/registrationPage", registrationPage);

router.get("/visitHistory/:shortId", visitHistory)

router.get("/deshboard", valiUser, async (req, res) => {
    res.send(req.user)
})

router.get("/:shortId", renderUrl)

router.use((req, res) => {
    res.send("page not found!");
})

module.exports = router;



