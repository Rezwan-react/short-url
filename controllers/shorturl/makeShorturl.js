const generateRandomShortId = require("../../helpers/generateShortId");
const isUrlValid = require("../../helpers/isUrlValid");
const registrationSchema = require("../../modal/registrationSchema");
const ShortSchema = require("../../modal/ShortSchema");

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

    if (req.user) {

        const existUrl = await ShortSchema.findOneAndUpdate({ url }, { $set: { shortId: shorted } }, { new: true })
        if (existUrl) {

            await registrationSchema.findByIdAndUpdate(req.user.id, {$addToSet : {shortUrls : existUrl._id}})

            return res.render("index", {
                message: "Shot url generate successfully",
                longURL: existUrl.url,
                shortUrl: `http://localhost:5000/${(existUrl.shortId)}`,
                loggedUser: req.user
            })
        }

        const shortUrl = new ShortSchema({
            url: url,
            shortId: shorted,
            isAuth: true
        })

        shortUrl.save()

        await registrationSchema.findByIdAndUpdate(req.user.id, { $push:{ shortUrls: shortUrl._id }})


        res.render("index", {
            message: "Shot url generate successfully",
            longURL: shortUrl.url,
            shortUrl: `http://localhost:5000/${(shortUrl.shortId)}`
        })

    } else {

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