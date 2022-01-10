const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const passport = require("passport");

require("dotenv").config();
require("./config/database");
require("./config/passport");

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", router);
app.listen("4000", () => console.log("Server listening on port 4000"));
