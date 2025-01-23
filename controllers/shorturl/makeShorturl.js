const isUrlValid = require("../../helpers/isUrlValid");
const ShortSchema = require("../../modal/ShortSchema");
const generateRandomShortId = require("./generateShortId");

const makeShorturl = (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).send({ err: "url is required!" })
    }
    if (!isUrlValid(url)) {
        return res.status(400).send({ err: "url is not valid" })
    }

    const shortUrl = new ShortSchema({
        url: url,
        shortId: generateRandomShortId(url)
    })

    shortUrl.save()

    res.send(shortUrl)
}

module.exports = makeShorturl