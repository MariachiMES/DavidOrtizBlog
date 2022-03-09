const { AuthenticationError } = require("apollo-server-express");
const { Users, Posts } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return Users.find().populate("posts");
    },

    user: async () => {
      return Users.findOne({ username }).populate("posts");
    },
    posts: async (parent, { postId }) => {
      return Posts.find().populate("username");
    },
    post: async (parent, { postId }) => {
      return (await Posts.findById({ _id: postId })).populate("username");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("add user mutation in resolvers");
      const user = await Users.create({
        username,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },

    addPost: async (parent, { title, description }) => {
      console.log("adding post in resolvers");
      const post = await Posts.create({ title, description });
      return post;
    },

    removePost: async (parent, { postId }) => {
      return Posts.findOneAndDelete(args, { _id: postId });
    },
    login: async (parent, { email, password }) => {
      const user = Users.findOne({ email });
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
