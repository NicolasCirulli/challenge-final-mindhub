const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const passport = require("passport");
const { Server } = require("socket.io");
const fileUpload = require("express-fileupload");

require("dotenv").config();
require("./config/database");
require("./config/passport");

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", router);
app.use(fileUpload())

let server = app.listen("4000", () =>
  console.log("Server listening on port 4000")
);

/********************SOCKET***************/

const io = new Server(server, { cors: { origin: "*" } });
io.on("connect", (socket) => {
  console.log("Socket Connected");
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  for (var i = users.length - 1; i >= 0; --i) {
    if (users[i].userId == null) {
      users.splice(i, 1);
    }
  }
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    users.find((receiver) => receiver === user) &&
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
