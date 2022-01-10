const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true },
  password: String,
  image: String,
  cart: { type: Array, default: [] },
  address: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
