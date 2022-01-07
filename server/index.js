const express = require("express");
const app = express();

const server = app.listen("4000", () =>
  console.log("Server listening on port 4000")
);
