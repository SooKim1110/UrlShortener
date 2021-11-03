let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/urlShortener',{ useNewUrlParser: true } );

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log("mongo db is connected");
});

module.exports = db;