const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.error(err.message, err);
  console.log(err);
  res.status(500).send({
    success: false,
    status: "Internal Server Error",
    details: "Server error. Please try again in a bit.",
    errorCode: "#BE500",
  });
};
// Every Backend Error Message Go By this
