const express = require('express');
const dbConnect = require('./config/dbConnect');
require('dotenv').config()
const router = require('./router');
const app = express()
app.use(express.json())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(router)
// =============== mongodb connect 
dbConnect()




app.listen(5000, () => {
    console.log("server is running");
})
