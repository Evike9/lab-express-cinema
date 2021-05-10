const express = require("express");
const router = express.Router();
const movieModel = require("./../models/movie.model.js");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", (req, res, next) => {
  movieModel
    .find()
    .then((movies) => {
      const viewData = {
        movies: movies,
      };
      res.render("movies.hbs", viewData);
    })
    .catch((error) => next(error));
});

router.get("/movies/:id", (req, res, next) => {
  movieModel
    .findById(req.params.id)
    .then((dbResult) => {
      res.render("movieDetails.hbs", {
        oneMovie: dbResult,
      });
    })
    .catch((error) => next(error));
});

router.get("/movies/delete/:id", (req, res, next) => {
  movieModel.findByIdAndDelete(req.params.id).then((dbResult) => {
    res.redirect("/movies");
  });
  
});

module.exports = router;
