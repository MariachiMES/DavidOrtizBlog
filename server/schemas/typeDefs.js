const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Posts {
    _id: ID
    title: String
    description: String
  }
  type Auth {
    token: ID!
    Users: Users
  }

  type Query {
    users: [Users]
    user(UserId: ID!): Users
    Posts: [Posts]
    posts(postId: ID!): Posts
  }
`;
module.exports = typeDefs;
