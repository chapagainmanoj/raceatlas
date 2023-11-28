const mongoose = require('mongoose');

require('dotenv').config()

module.exports = function(){
    mongoose.connect(process.env.MONGODB_URL);

    let mongodb = mongoose.connection; // returns state connected if successful
    //console.log(mongodb);
    //adds listener function to the end of event error
    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    //adds listener to the open event
    mongodb.once('open', ()=>{
        console.log("Connected to MongoDB:");
    })
    //returns mongodb to server.js to call the mongodb so it connects to database
    return mongodb;
}