var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/Haywhy";

MongoClient.connect(url, function(err, db) {

if (err) throw err;

console.log("Database created by Haywhy");

db.close();

});