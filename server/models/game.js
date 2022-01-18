const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  background_image : String,
  background_image_additional : String,
  description: String,
  description_raw : String,
  developers : Object,
  genres : [
    {
      id: Number,
      image_background: String,
      name : String,
      slug : String,

    }
  ],
  name : String,
  name_original : String,
  platforms : [{type : Object}],
  rating : Number,
  rating_top : Number,
  ratings : Array,
  released : String,
  slug : String,
  tags : Array,
  website : String,
  price: Number,
  offer: Boolean,
  priceOffer: Number,
  percentage : Number,
  screenshot : [{
    url: String,
  }],
  trailer: String,
  creator_img: String,
  language: [{
    type: Boolean
  }],
  comments: [
    {
        comment:{type:String},
        idUser:{ type:mongoose.Types.ObjectId, ref:'user' },
        imageUser: {type:String},
        nameUser: {type:String}
    }
],
});

const game = mongoose.model("game", gameSchema);
module.exports = game;
