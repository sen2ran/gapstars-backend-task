const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const error = require("../middleware/error");
const images = require("../route/images");

module.exports = function (app) {
  app.use(cors());
  app.use(morgan("common"));
  app.use(express.json());
  //Routes
  app.use("/api/image", images);
  app.use(error);
};
