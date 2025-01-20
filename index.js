const express = require('express');
const dbConnect = require('./config/dbConnect');
const router = require('./router');
const app = express()
app.use(express.json())
app.use(router)

// =============== mongodb connect 
dbConnect()




app.listen(5000, ()=>{
    console.log("server is running");    
})
// qkezPNC9y3VSdEZq