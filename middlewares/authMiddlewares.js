var jwt = require('jsonwebtoken');

const valiUser = (req, res, next) => {

    try {
        const token = req.cookies

        if (token.assessToken) {
            
            jwt.verify(token.assessToken, process.env.jwtKey, function(err, decoded) {
                
                if(err){
                    req.user = null;
                    next()
                }

                if (decoded.data) {
                    req.user = decoded.data
                    next()
                }
              });

        }else{
            req.user = null;
            next()
        }

    } catch (error) {
        res.status(400).send("unauthorized user")
    }

}

module.exports = valiUser