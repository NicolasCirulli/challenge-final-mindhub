const Game = require("../models/game");
const user = require("../models/User");

const gameControllers = {
  addGame: async (req, res) => {
    const newGame = new Game({ ...req.body });
    try {
      await newGame.save();
      return res.status(200).json({
        message: "Game added succesfully",
        res: newGame,
      });
    } catch (err) {
      return res.status(400).json({
        message: "failed request ",
        res: err.message,
      });
    }
  },
  getGame: async (req, res) => {
    try {
      let game = await Game.findById(req.params.id);
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch the game",
        res: err.message,
      });
    }
  },
  getAllGame: async (req, res) => {
    try {
      let games = await Game.find();
      res.json({ success:true, res: games });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch the games",
        res: err.message,
      });
    }
  },
  updateGame: async (req, res) => {
    
      Game.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      )
        .then((response) => res.json({ success: true, respuesta: response }))
        .catch((error) =>
          res.json({ success: false, response: error.message })
        );
  },
  deleteGame: async (req, res) => {
    try {
      let game = await Game.findOneAndDelete({ _id: req.params.id });
      res.json({ res: game });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  },

};

module.exports = gameControllers;
