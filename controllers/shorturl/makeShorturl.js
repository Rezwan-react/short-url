const generateRandomShortId = require("../../helpers/generateShortId");
const isUrlValid = require("../../helpers/isUrlValid");
const ShortSchema = require("../../modal/ShortSchema");

const loggedUser = () => {
    try {
        const token = req.cookies

        if (!token.assessToken) return res.status(400).send("unauthorized user")

        var decoded = jwt.verify(token.assessToken, process.env.jwtKey);

        if (decoded.data) {
            return decoded.data

        }
    } catch (error) {
        return false
    }
}

const makeShorturl = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.render("index", {
            error: "url is required!"
        })
    }
    if (!isUrlValid(url)) {
        return res.render("index", {
            error: "url is not valid!"
        })
    }

    const shorted = generateRandomShortId(url)
    const userData = loggedUser()
    if(userData){

    }else{

        const existUrl = await ShortSchema.findOneAndUpdate({ url }, { $set: { shortId: shorted } }, { new: true })
    
        if (existUrl) {
            return res.render("index", {
                message: "Shot url generate successfully",
                longURL: existUrl.url,
                shortUrl: `http://localhost:5000/${(existUrl.shortId)}`
            })
        }
    
        const shortUrl = new ShortSchema({
            url: url,
            shortId: shorted
        })
    
        shortUrl.save()
        res.render("index", {
            message: "Shot url generate successfully",
            longURL: shortUrl.url,
            shortUrl: `http://localhost:5000/${(shortUrl.shortId)}`
        })
    }
}

module.exports = makeShorturl