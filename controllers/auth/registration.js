const ValidateEmail = require("../../helpers/validateEmail");
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registration = async (req, res) => {

    const { userName, email, password } = req.body;

    try {
        if (!userName) {
            return res.status(400).send("Enter your user name")
        }
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
        console.log(validatePassword(password));

        if (validatePassResult) {
            return res.status(400).send(validatePassResult)
        }

        const existinguser = await registrationSchema.findOne({email})
        
        if(existinguser){
            return res.status(400).send("Email already exist")
        }

        bcrypt.hash(password, saltRounds, function(err, hash) {
            
            const user =  registrationSchema({
                userName, email, password: hash
            })
    
            user.save()
    
            res.send("successful")
            
        });
        
    } catch (error) {
        return res.status(400).send("Server side error please try again")
    }
}

module.exports = registration