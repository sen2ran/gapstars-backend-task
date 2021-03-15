const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  port: process.env.PORT,
  DBName: process.env.DBName,
};
