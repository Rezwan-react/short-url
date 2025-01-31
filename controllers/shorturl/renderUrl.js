const ShortSchema = require("../../modal/ShortSchema");

const renderUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const existUrl = await ShortSchema.findOneAndUpdate({ shortId }, {$push: {visitHistory: {clickedAt: Date.now()}}}, {new: true})

    if (!existUrl) {
        return res.status(404).send("page not found!")
    }

    res.redirect(existUrl.url);

}

const visitHistory = async (req, res)=>{
    const shortId = req.params.shortId;
    const existUrl = await ShortSchema.findOne({ shortId })

    if (!existUrl) {
        return res.status(404).send("ID not found!")
    }

    res.send(existUrl);
}


module.exports = {renderUrl, visitHistory};