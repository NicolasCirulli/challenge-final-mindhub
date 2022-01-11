const router = require("express").Router();
const passport = require("passport");

const userControllers = require("../controllers/userControllers");
const gameControllers = require("../controllers/gameControllers");

const { addNewUser, signInUser, getUser } = userControllers;
const { addGame, getGame } = gameControllers;

router.route("/user/signup").post(addNewUser);

router.route("/user/signin").post(signInUser);

router.route("/user/:id").get(getUser);

router.route("/game").post(addGame);
router.route("/game/:id").get(getGame);

router
  .route("/verifyToken")
  .get(
    passport.authenticate("jwt", { session: false }),
    userControllers.verifyToken
  );

module.exports = router;
