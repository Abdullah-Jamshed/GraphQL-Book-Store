const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: Data!
    book(id: ID): Book!
    searchedBooks(currentPage: Int, searchedInput: String): Data!
    authors: [Author!]!
    author(id: ID!): Author!
  }
  type Data {
    total: String
    page: String
    books(limit: Int, currentPage: Int): [Book!]!
  }

  type Book {
    isbn13: ID!
    title: String!
    subtitle: String
    authors: String
    publisher: String
    pages: String
    language: String
    year: String
    rating: String
    desc: String
    price: String
    image: String
    url: String
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
