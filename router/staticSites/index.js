const homePage = (req, res) => {
    res.render('index');
}

const registrationPage = (req, res) => {
    res.render('register');
}

const loginPage = (req, res) => {
    res.render('login');
}

module.exports = {homePage, registrationPage, loginPage}