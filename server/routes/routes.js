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
  wishList
} = userControllers;
const {
  addGame,
  getGame,
  getAllGame,
  deleteGame,
  updateGame,
  getGameByGenre,
  getGamesByName,
  addComment,
  deleteComment,
  updateComment
} = gameControllers;
const { addNewMessage, getMessage } = messageControllers;
const { newConversation, getUserConversation, getTwoUsers } =
  conversationControllers;

// USER

router.route("/users").get(passport.authenticate('jwt',{session:false}),getAllUsers);

router.route("/user/signup").post(validator, addNewUser);
router.route("/user/signin").post(signInUser);

router.route("/user/:id")
.get(getUser)
.delete(passport.authenticate('jwt',{session:false}),deleteUser)
.put(passport.authenticate('jwt',{session:false}),updateUser);

router
  .route("/verifyToken")
  .post(
    passport.authenticate("jwt", { session: false }),
    userControllers.verifyToken
  );

router.route("/verify/:uniqueString").get(mailVerification);

router.route("/wishList/:id").put(passport.authenticate('jwt',{session:false}),wishList);

// GAME
router.route("/allgames").get(getAllGame);

router.route("/gameByGenre/:genre").get(getGameByGenre);

router.route("/gameByName/:name").get(getGamesByName);

router.route("/game").post(passport.authenticate('jwt',{session:false}),addGame);

router.route("/game/:id")
.get(getGame)
.delete(passport.authenticate('jwt',{session:false}),deleteGame)
.put(passport.authenticate('jwt',{session:false}),updateGame);

// comentarios games
router.route("/comment/:id")
.post(passport.authenticate('jwt',{session:false}),addComment)
.put(passport.authenticate('jwt',{session:false}),updateComment)
.delete(passport.authenticate('jwt',{session:false}),deleteComment)

// CHAT

router.route("/messages").post(addNewMessage);
router.route("/messages/:conversationId").get(getMessage);
router.route("/conversations").post(newConversation);
router.route("/conversations/:userId").get(getUserConversation);
router.route("/conversations/find/:firstUserId/:secondUserId").get(getTwoUsers);
//router.route("/user/:id").get(getOneUser);

module.exports = router;
