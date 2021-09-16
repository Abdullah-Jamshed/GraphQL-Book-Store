const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books(limit: Int, currentPage: Int): [Book!]!
    book(id: ID!): Book!
    authors: [Author!]!
    author(id: ID!): Author!
  }

  type Book {
    id: ID!
    title: String!
    subtitle: String!
    published: String!
    description: String!
    authorId: ID!
  }

  type Author {
    id: ID!
    author: String!
    age: Int!
    books: [Book!]
  }

  type Mutation {
    createAuthor(author: String!, age: Int!): Author
    createBook(title: String!, subtitle: String!, description: String!, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
