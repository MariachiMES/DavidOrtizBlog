import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      User {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $description: String!) {
    addPost(title: $title, description: $description) {
      title
      description
    }
  }
`;
