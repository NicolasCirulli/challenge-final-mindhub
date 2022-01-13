const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  data: Array,
  price: String,
});

const game = mongoose.model("game", gameSchema);
module.exports = game;
