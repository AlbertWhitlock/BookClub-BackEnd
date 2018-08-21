//require seed.js file into this, do we create DB file??
const mongoose = require("../../db/connection");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: String,
  author: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Book", Book);