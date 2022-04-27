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
  date: {
    type: String,
    required: true,
  },
});

const Post = Mongoose.model("Post", postSchema);

module.exports = Post;
