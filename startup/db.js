var { DBName } = require("../config");
const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  mongoose
    .connect(`mongodb://127.0.0.1:27017/${DBName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => winston.info("connected to MongoDB..."))
    .catch(err => winston.error("Unable to connect", err));
  // useCreateIndex: true
};
