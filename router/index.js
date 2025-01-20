const express = require('express');
const apiRoute = require('./api');
const router = express.Router();

router.use("/api/v1", apiRoute)

router.use((req, res)=>{
    res.send("page not found!");    
})

module.exports = router;



