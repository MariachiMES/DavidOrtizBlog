const { AuthenticationError } = require("apollo-server-express");
const { User, Post } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate("posts");
    },

    user: async (parent, args) => {
      return await User.findById(args.userId).populate("posts");
    },
    posts: async () => {
      return await Post.find().populate("username");
    },
    post: async (parent, args) => {
      return await Post.findById(args.postId).populate("username");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, { title, description }) => {
      console.log("adding post in resolvers");
      const post = await Post.create({ title, description });
      return post;
    },

    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete(args, { _id: postId });
    },
    login: async (parent, { email, password }) => {
      const user = User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect Email or Password");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Email or Password");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;
