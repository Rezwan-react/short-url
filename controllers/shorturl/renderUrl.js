const ShortSchema = require("../../modal/ShortSchema");

const renderUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const existUrl = await ShortSchema.findOne({ shortId })

    if (!existUrl) {
        return res.status(404).send("page not found!")
    }

    res.render(existUrl.url);

}

module.exports = renderUrl;