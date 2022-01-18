const router = require("express").Router();
const passport = require("passport");
const validator = require("../config/validator");
const userControllers = require("../controllers/userControllers");
const gameControllers = require("../controllers/gameControllers");
const messageControllers = require("../controllers/messageControllers");
const conversationControllers = require("../controllers/conversationControllers");

const {
  addNewUser,
  signInUser,
  getUser,
  getAllUsers,
  deleteUser,
  updateUser,
  mailVerification,
} = userControllers;
const {
  addGame,
  getGame,
  getAllGame,
  deleteGame,
  updateGame,
  getGameByGenre,
  getGamesByName,
} = gameControllers;
const { addNewMessage, getMessage } = messageControllers;
const { newConversation, getUserConversation, getTwoUsers } =
  conversationControllers;

// USER

router.route("/users").get(getAllUsers);

router.route("/user/signup").post(validator, addNewUser);
router.route("/user/signin").post(signInUser);

router.route("/user/:id").get(getUser).delete(deleteUser).put(updateUser);

router
  .route("/verifyToken")
  .post(
    passport.authenticate("jwt", { session: false }),
    userControllers.verifyToken
  );

router.route("/verify/:uniqueString").get(mailVerification);

// GAME
router.route("/allgames").get(getAllGame);

router.route("/gameByGenre/:genre").get(getGameByGenre);

router.route("/gameByName/:name").get(getGamesByName);

router.route("/game").post(addGame);

router.route("/game/:id").get(getGame).delete(deleteGame).put(updateGame);

// CHAT

router.route("/messages").post(addNewMessage);
router.route("/messages/:conversationId").get(getMessage);
router.route("/conversations").post(newConversation);
router.route("/conversations/:userId").get(getUserConversation);
router.route("/conversations/find/:firstUserId/:secondUserId").get(getTwoUsers);
//router.route("/user/:id").get(getOneUser);

module.exports = router;
