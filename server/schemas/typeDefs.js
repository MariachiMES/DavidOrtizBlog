const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Posts]
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
    posts: [Posts]
    post(postId: ID!): Posts
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removePost(_id: ID!): Posts

    addPost(title: String!, description: String!): Posts
  }
`;
module.exports = typeDefs;
