const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    name: String!
    email: String!
    password: String!
  }

  input UserInput {
    name: String
    email: String
    password: String
  }

  type Query {
    getUser(ID: ID!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    signup(userInput: UserInput!): User
    login(email: String!, password: String): String
  }
`;
