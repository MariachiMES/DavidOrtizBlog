const Mongoose = require("mongoose");

const postSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Posts = Mongoose.model("Posts", postSchema);

module.exports = Posts;
