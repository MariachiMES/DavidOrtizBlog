const { Users } = require("../models");

//import signToken function from auth

const signToken = require("../utils/auth");

module.exports = {
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await Users.findOne({
      $or: [{ _id: user ? user.id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this ID!" });
    }
    res.json(foundUser);
  },
  async createUser({ body }, res) {
    const user = await Users.create(body);

    if (!user) {
      return res.status(400).json({ message: "Cannot find this User" });
    }
    const correctPw = await Users.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  async login({ body }, res) {
    const user = await Users.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Cannot find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.passwword);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong Password" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};
