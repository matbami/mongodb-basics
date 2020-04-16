const assert = require("assert");
const updateInterns = function(db, callback) {
  var dbo = db.db("Haywhy");
  var myquery = { movie: "Bloodshot" };
  var newvalues = { $set: { movie: "Batman", rating: 8, year: "1999" } };
  dbo
    .collection("myMovies")
    .updateOne(myquery, newvalues, function(err, result) {
      if (err) throw err;
      //   assert.equal(1, result.result.n);
      console.log(result);
      callback();
    });
};

module.exports = updateInterns;
