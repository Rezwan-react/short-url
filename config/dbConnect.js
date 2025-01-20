const mongoose = require('mongoose');


const dbConnect = ()=>{
    mongoose.connect('mongodb+srv://node:qkezPNC9y3VSdEZq@cluster0.f3vpn.mongodb.net/shortUrl?retryWrites=true&w=majority&appName=Cluster0')
      .then(() => console.log('Connected!'));
}


module.exports = dbConnect;
