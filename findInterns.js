const findInterns = function(db, callback) {
  var dbo = db.db("Haywhy");
  dbo.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log("FIRST RESULT OF DOCUMENT", result);
    callback();
  });

  const query = { rating: 7 };

  dbo
    .collection("myMovies")
    .find(query)
    .toArray(function(err, result) {
      if (err) throw err;
      console.log("ALL RATING WITH 7", result);
      callback();
    });

  dbo
    .collection("myMovies")
    .find({}, { _id: 0, movie: 1 })
    .toArray(function(err, result) {
      if (err) throw err;
      console.log("ONLY MOVIE TITLES", result);
      db.close();
    });
};

module.exports = findInterns;
