const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  stars: [String],

  image: {
    type: String,
    default: "//images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  },
  description: {
    type: String,

  showtimes: {
    type: Hour,
    default: Time.now,
  },

});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;

