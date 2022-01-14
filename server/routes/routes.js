const router = require("express").Router();
const passport = require("passport");
const validator = require("../config/validator");
const userControllers = require("../controllers/userControllers");
const gameControllers = require("../controllers/gameControllers");

const { addNewUser, signInUser, getUser, getAllUsers, deleteUser, updateUser } =
  userControllers;
const { addGame, getGame, getAllGame,deleteGame,updateGame,getGameByGenre,getGamesByName } = gameControllers;

// USER

router.route('/users').get(getAllUsers)

router.route("/user/signup").post(validator, addNewUser);
router.route("/user/signin").post(signInUser);

router.route("/user/:id")
.get(getUser)
.delete(deleteUser)
.put(updateUser)

router.route("/verifyToken")
.post(
    passport.authenticate("jwt", { session: false }),
    userControllers.verifyToken
  );

// GAME
router.route("/allgames")
.get(getAllGame);

router.route('/gameByGenre/:genre')
.get(getGameByGenre)

router.route('/gameByName/:name')
.get(getGamesByName)

router.route("/game")
.post(addGame);

router.route("/game/:id")
.get(getGame)
.delete(deleteGame)
.put(updateGame)
module.exports = router;
