const Game = require("../models/game");
const user = require("../models/User");

const gameControllers = {
  addGame: async (req, res) => {
    const newGame = new Game({ ...req.body });
    try {
      await newGame.save();
      return res.status(200).json({
        message: "Game added succesfully",
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
};

module.exports = gameControllers;
