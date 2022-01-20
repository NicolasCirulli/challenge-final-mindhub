const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  articles: Array,
  total: String,
  userId: { type: mongoose.Types.ObjectId, ref: "user" },
  mail: String,
  userName: String,
});

const purchase = mongoose.model("purchase", purchaseSchema);
module.exports = purchase;
