const {Schema, model} = require("mongoose");

const project = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  linkPage: {
    type: String,
    required: true
  },
  linkSource: {
    type: String,
    required: true
  },
});

module.exports = model("Project", project);