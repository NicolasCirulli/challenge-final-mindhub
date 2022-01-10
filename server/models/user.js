const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  mail: { type: String, required: true },
  password: String,
  image: String,
  cart: { type: Array, default: [] },
  address: String,
  wishList: { type: Array, default: [] },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
