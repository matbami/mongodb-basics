const movieCollection = function(db, callback) {
  var dbo = db.db("Haywhy");
  const dataobject = [
    { movie: "The Banker", year: "2020", rating: 8 },
    { movie: "Bad Boys", year: "2020", rating: 7 },
    { movie: "The Hunt", year: "2020", rating: 7 },
    { movie: "Bloodshot", year: "2020", rating: 7.5 },
    { movie: "First Cow", year: "2020", rating: 6.5 }
  ];
  dbo.collection("myMovies").insertMany(dataobject, function(err, res) {
    if (err) throw err;
    console.log("Movies created suceesfully", res);
    callback();
  });
};
module.exports = movieCollection;
