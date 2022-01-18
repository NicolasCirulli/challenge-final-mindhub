const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const sendEmail = async (mail, uniqueString) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "useremailverifyMindHub@gmail.com",
      pass: "mindhub2021",
    },
    tls: { rejectUnauthorized: false },
  });

  let sender = "useremailverifyMindHub@gmail.com";
  let mailOptions = {
    from: sender,
    to: mail,
    subject: "Xtreme user verification",
    html: `Click <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a>to confirm and verify your accout`,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mensaje enviado");
    }
  });
};

const userControllers = {
  addNewUser: async (req, res) => {
    const {
      firstName,
      lastName,
      userName,
      mail,
      password,
      image,
      address,
      google,
    } = req.body;

    try {
      const userExists = await User.findOne({ mail: mail });
      if (userExists) {
        if (google) {
          const hashedPassword = bcryptjs.hashSync(password);
          userExists.password = hashedPassword;
          userExists.verifiedAccount = true;
          userExist.google = true;
          userExists.save();
          res.json({
            succes: true,
            message: "User created succesfully with google account",
          });
        } else {
          res.json({ succes: false, res: "Username already in use" });
        }
      } else {
        const uniqueString = crypto.randomBytes(15).toString("hex");
        const verifiedAccount = false;
        const hashedPassword = bcryptjs.hashSync(password);
        const newUser = new User({
          firstName,
          lastName,
          userName,
          mail,
          password: hashedPassword,
          uniqueString,
          verifiedAccount,
          google,
          address,
          image,
        });
        const token = await jwt.sign({ ...newUser }, process.env.SECRETOKEN);

        if (google) {
          newUser.verifiedAccount = true;
          newUser.google = true;
          await newUser.save();
          res.json({
            succes: true,
            response: { token, newUser },
            message: "Account created with google",
          });
        } else {
          newUser.verifiedAccount = false;
          newUser.google = false;
          await newUser.save();
          await sendEmail(mail, uniqueString);
          res.json({
            succes: true,
            response: { token, newUser },
            message: "An email has been sent to verified the account",
          });
        }
      }
    } catch (err) {
      console.log(err);
      res.json({ succes: false, response: null, error: err });
    }
  },

  mailVerification: async (req, res) => {
    const { uniqueString } = req.params;
    const user = await User.findOne({ uniqueString: uniqueString });

    if (user) {
      user.verifiedAccount = true;
      await user.save();
      res.redirect("http://localhost:3000/");
    } else {
      res.json({ succes: false, response: "Mail not verified" });
    }
  },

  /* addNewUser: async (req, res) => {
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
        },
      });
    } catch (err) {
      res.json({ success: false, res: err.message });
    }
  }, */
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
