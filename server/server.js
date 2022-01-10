const express = require("express");
const app = express();
const router = require("./routes/routes");

require("dotenv").config();
require("./config/database");

app.use(express.json());
app.use("/api", router);
app.listen("4000", () => console.log("Server listening on port 4000"));
