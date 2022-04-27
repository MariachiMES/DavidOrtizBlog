const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    description: String
    date: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    posts: [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
    removePost(_id: ID!): Post
    addPost(title: String!, description: String!): Post
  }
`;
module.exports = typeDefs;
