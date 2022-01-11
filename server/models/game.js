const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: String,
  shortDescription: String,
  genre: String,
  image: String,
  price: String,
  platform: Array,
  ScreenShots: Array,
  trailer: Array,
  reviews: Array,
  rating: Number,
  year: Number,
  relatedGames: Array,
  languages: Array,
  developer: String,
  minimumRequeriments: Object,
});

const game = mongoose.model("game", gameSchema);
module.exports = game;
