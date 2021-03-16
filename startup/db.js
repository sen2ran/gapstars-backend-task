var { DBName } = require("../config");
const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  console.log("Sen2")
  mongoose
    .connect(`mongodb+srv://sen2:Sen21324@sen2.fiobl.mongodb.net/${DBName}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => winston.info("connected to MongoDB..."))
    .catch(err => winston.error("Unable to connect", err));
  // useCreateIndex: true
};

// mongodb+srv://sen2:Sen21324@sen2.fiobl.mongodb.net/${DBName}?retryWrites=true&w=majority
