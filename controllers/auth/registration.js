const ValidateEmail = require("../../helpers/validateEmail");
const validatePassword = require("../../helpers/validatePassword");
const registrationSchema = require("../../modal/registrationSchema");

const registration = async (req, res) => {

    const { userName, email, password } = req.body;

    try {
        if (!userName) {
            return res.status(400).send("Enter your user name")
        }
        if (!email) {
            return res.status(400).send("Enter your email")
        }
    
        if(!ValidateEmail(email)){
            return res.status(400).send("Email not invalid")
        }
    
        if (!password) {
            return res.status(400).send("Enter your password")
        }
    
        const validatePassResult = validatePassword(password)
        console.log(validatePassword(password));
        
        if(validatePassResult){
            return res.status(400).send(validatePassResult)
        }
        
        const user = await registrationSchema({
            userName, email, password
        })
        
        user.save()
    
        res.send(user)
    } catch (error) {
        return res.status(400).send("Server side error please try again")
    }
}

module.exports = registration