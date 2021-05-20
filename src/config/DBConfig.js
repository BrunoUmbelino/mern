const mongoose = require("mongoose");
require("dotenv").config();

const db_string = process.env.DB_STRING;

const connection = mongoose.connect(db_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
