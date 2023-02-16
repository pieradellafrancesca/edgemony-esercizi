const mongoose = require("mongoose");

let libroSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  country: {
    type: String,
  },
  language: {
    type: String,
  },
  year: {
    type: Number,
  },
  pages: {
    type: Number,
  },
});

mongoose.model("bookModel", libroSchema);
