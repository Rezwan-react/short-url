const ValidateEmail = require("../../helpers/validateEmail");
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).send("Enter your email")
        }

        if (!ValidateEmail(email)) {
            return res.status(400).send("Email not invalid")
        }

        if (!password) {
            return res.status(400).send("Enter your password")
        }

        const validatePassResult = validatePassword(password)

        if (validatePassResult) {
            return res.status(400).send(validatePassResult)
        }

        const existingUser = await registrationSchema.findOne({ email })

        if (!existingUser) {
            return res.status(400).send("User not found")
        }

        const match = await bcrypt.compare(password, existingUser.password);

        if (!match) {
            return res.status(400).send("User not found")
        }

        const assessToken = jwt.sign({
            data: {
                id: existingUser._id,
                email: existingUser.email
            }
        }, process.env.jwtKey, { expiresIn: '1d' });

        const loginUser = {
            id: existingUser._id,
            email: existingUser.email,
            userName: existingUser.userName
        }

        res.status(200).cookie("assessToken", assessToken).redirect("/")
    } catch (error) {

    }

}

module.exports = login