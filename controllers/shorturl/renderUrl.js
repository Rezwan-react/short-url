const ShortSchema = require("../../modal/ShortSchema");

const renderUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const existUrl = await ShortSchema.findOne({ shortId })

    if (!existUrl) {
        return res.status(404).send("page not found!")
    }

    if (existUrl.isAuth) {
       const url = await ShortSchema.findByIdAndUpdate(existUrl._id, {$push: {visitHistory: {clickedAt: Date.now()}}}, {new: true})
        res.redirect(url.url);
    }else{
        res.redirect(existUrl.url);
    }


}




module.exports = { renderUrl};