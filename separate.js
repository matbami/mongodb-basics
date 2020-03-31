var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var Ay = db.db("Haywhy");
  Ay.createCollection("Interns", function(err, res) {
    if (err) throw err;
    console.log("Interns collection created");
    db.close();
  });
});
