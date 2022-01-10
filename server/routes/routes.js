const router = require("express").Router();
const passport = require("passport");

const userControllers = require("../controllers/userControllers");

const { addNewUser, signInUser, getUser } = userControllers;

router.route("/user/signup").post(addNewUser);

router.route("/user/signin").post(signInUser);

router.route("/user/:id").get(getUser);

router
  .route("/verifyToken")
  .get(
    passport.authenticate("jwt", { session: false }),
    userControllers.verifyToken
  );

module.exports = router;
