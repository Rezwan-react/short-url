const generateRandomShortId = require("../../helpers/generateShortId");
const isUrlValid = require("../../helpers/isUrlValid");
const ShortSchema = require("../../modal/ShortSchema");

const makeShorturl = async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send({ err: "url is required!" })
    }
    if (!isUrlValid(url)) {
        return res.status(400).send({ err: "url is not valid" })
    }

    const shorted = generateRandomShortId(url)

    const existUrl = await ShortSchema.findOneAndUpdate({ url }, { $set: { shortId: shorted } }, { new: true })

    if (existUrl) {
        return res.status(200).send({
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

    res.status(200).send({
        message: "Shot url generate successfully",
        longURL: shortUrl.url,
        shortUrl: `http://localhost:5000/${(shortUrl.shortId)}`
    })
}

module.exports = makeShorturl