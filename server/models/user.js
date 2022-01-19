const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  mail: { type: String, required: true },
  password: String,
  image: String,
  cart:[
        {
          idGame:{ type:String },
          amount: {type:Number},
        }
      ],
  address: String,
  wishList: { type: Array, default: [] },
  uniqueString: { type: String, required: true },
  verifiedAccount: { type: Boolean, required: true },
  google: { type: Boolean, required: true },
  role: { type: String, default: "user" },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
