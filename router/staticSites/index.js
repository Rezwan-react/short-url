const homePage = (req, res) => {
    res.render('index', {
        loggedUser: req.user
    });
}

const registrationPage = (req, res) => {
    res.render('register');
}

const loginPage = (req, res) => {
    res.render('login');
}

module.exports = {homePage, registrationPage, loginPage}