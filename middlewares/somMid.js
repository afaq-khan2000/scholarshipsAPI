const express = require("express");
const cors = require("cors");

var app = express();

function somMid(req, res, next) {
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
  next();
}

module.exports = somMid;
