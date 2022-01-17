const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userControllers = {
  addNewUser: async (req, res) => {
    const { firstName, lastName, userName, mail, password, image, address } =
      req.body;
    const hashedPassword = bcryptjs.hashSync(password);
    const newUser = new User({
      firstName,
      lastName,
      userName,
      mail,
      password: hashedPassword,
      image,
      address,
      
    });
    try {
      let repeatedUser = await User.findOne({ mail: mail });
      if (repeatedUser) {
        throw new Error("Mail already in use");
      }
      await newUser.save();
      let token = jwt.sign({ ...newUser }, process.env.SECRETOKEN);
      res.json({
        success: true,
        res: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          userName: newUser.userName,
          image: newUser.image,
          address: newUser.address,
          id: newUser._id,
          token,
          role: newUser.role,
        },
      });
    } catch (err) {
      res.json({ success: false, res: err.message });
    }
  },
  signInUser: async (req, res) => {
    const { mail, password } = req.body;
    try {
      let userExist = await User.findOne({ mail: mail });

      if (!userExist) throw new Error("Mail incorrect, try again.");

      let match = bcryptjs.compareSync(password, userExist.password);
      if (!match) throw new Error("Password incorrect, try again.");
      let token = jwt.sign({ ...userExist }, process.env.SECRETOKEN);
      res.json({
        success: true,
        res: {
          userName: userExist.userName,
          id: userExist._id,
          token,
          image: userExist.image,
          role: userExist.role,
        },
      });
    } catch (err) {
      res.json({ success: false, res: err.message });
    }
  },
  verifyToken: (req, res) => {
    res.json({
      success: true,
      res: {
        userName: req.user.userName,
        image: req.user.image,
        _id: req.user._id,
        role: req.user.role,
      },
    });
  },
  getUser: async (req, res) => {
    try {
      let user = await User.findById(req.params.id);
      res.json({ res: user });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      let user = await User.find();
      res.json({ res: user });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      let user = await User.findOneAndDelete({ _id: req.params.id });
      res.json({ res: user });
    } catch (err) {
      return res.status(400).json({
        message: "cannot fetch user",
        res: err.message,
      });
    }
  },
  updateUser: async (req, res) => {
    if (req.body.password) {
      let cryptPass = bcryptjs.hashSync(req.body.password);
      let newPassword = { password: cryptPass };

      User.findOneAndUpdate(
        { _id: req.params.id },
        { ...newPassword },
        { new: true }
      )
        .then((response) => res.json({ success: true, respuesta: response }))
        .catch((error) =>
          res.json({ success: false, response: error.message })
        );
    } else {
      User.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true }
      )
        .then((response) => res.json({ success: true, respuesta: response }))
        .catch((error) =>
          res.json({ success: false, response: error.message })
        );
    }
  },
};

module.exports = userControllers;
