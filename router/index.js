const express = require('express');
const apiRoute = require('./api');
const { renderUrl, visitHistory } = require('../controllers/shorturl/renderUrl');
const { homePage, registrationPage, loginPage } = require('./staticSites');
const valiUser = require('../middlewares/authMiddlewares');
const registrationSchema = require('../modal/registrationSchema');
const router = express.Router();

router.use(process.env.BASE_API, apiRoute)


router.get('/', valiUser, homePage);

router.get("/loginPage", loginPage);

router.get("/registrationPage", registrationPage);

router.get("/logout", (req, res) => {
    res.clearCookie("assessToken").redirect("/loginPage")
})

router.get("/visitHistory", valiUser, async (req, res) => {
    if (req.user) {

        const userData = await registrationSchema.findById(req.user.id).select("-password").populate("shortUrls")
        console.log(userData);

        res.render("visitHistory", {
            urlHistory: userData,
            loggedUser: req.user
        });

    } else {
        res.redirect("/loginPage")
    }
})

router.get("/:shortId", renderUrl)

router.use((req, res) => {
    res.send("page not found!");
})

module.exports = router;



