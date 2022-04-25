import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query users($username: String!) {
    users(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      title
      description
    }
  }
`;
