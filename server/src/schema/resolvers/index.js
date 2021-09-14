const books = require("../../data/books.json");
const authors = require("../../data/authors.json");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, { id }) => books.find((book) => book.id == id),
    authors: () => authors,
    author: (parent, { id }) => authors.find((author) => author.id == id),
  },

  Author: {
    books: ({ id }) => books.filter((book) => book.authorId == id),
  },
};

module.exports = resolvers;
