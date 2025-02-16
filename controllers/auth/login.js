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

        const existinguser = await registrationSchema.findOne({ email })

        if (!existinguser) {
            return res.status(400).send("User not found")
        }

        const match = await bcrypt.compare(password, existinguser.password);

        if (!match) {
            return res.status(400).send("User not found")
        }

        const assessToken = jwt.sign({
            data: {
                id: existinguser._id,
                email: existinguser.email
            }
        }, process.env.jwtKey, { expiresIn: '1d' });

        const loginUser = {
            id : existinguser._id,
            email : existinguser.email,
            userName : existinguser.userName
        }

        res.status(200).cookie("assessToken", assessToken).send({ message: "successful", assessToken, loginUser })
    } catch (error) {

    }

}

module.exports = login