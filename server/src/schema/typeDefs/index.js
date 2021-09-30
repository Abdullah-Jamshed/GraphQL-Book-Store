const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    books: Data!
    book(id: ID): Book!
    searchedBooks(currentPage: Int, searchedInput: String): Data!
  }
  type Data {
    total: String
    page: String
    books: [Book!]!
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
`;

module.exports = typeDefs;
