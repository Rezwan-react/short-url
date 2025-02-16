var jwt = require('jsonwebtoken');

const valiUser = (req, res, next) => {

    try {
        const token = req.cookies

        if(!token.assessToken) return res.status(400).send("unauthorized user")
            
        var decoded = jwt.verify(token.assessToken, process.env.jwtKey);

        if (decoded.data) {
            req.user = decoded.data
            next()
        }
    } catch (error) {
        res.status(400).send("unauthorized user")
    } 

}

module.exports = valiUser