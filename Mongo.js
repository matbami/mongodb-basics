const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const movieCollection = require("./interns");
const findInterns = require("./findInterns");
const updateInterns = require("./updateInterns");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  movieCollection(db, function() {
    findInterns(db, function() {
      updateInterns(db, function() {
        db.close();
      });
    });
  });
});
