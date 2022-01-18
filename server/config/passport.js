const passport = require("passport");
const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/User");

module.exports = passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRETOKEN,
    },
    async (payload, done) => {
      try {
        let res = await User.findOne({ _id: payload._doc._id });
        if (!res) {
          return done(null, false);
        } else {
          console.log(res);
          return done(null, res);
        }
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
