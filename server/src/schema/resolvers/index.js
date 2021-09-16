const books = require("../../data/books.json");
const authors = require("../../data/authors.json");

const resolvers = {
  Query: {
    books: (parent, { limit, currentPage }) => {
      if (!limit && !currentPage) return books;
      return books.slice((currentPage - 1) * limit, limit * currentPage);
    },
    book: (parent, { id }) => books.find((book) => book.id == id),
    authors: () => authors,
    author: (parent, { id }) => authors.find((author) => author.id == id),
  },

  Author: {
    books: ({ id }) => books.filter((book) => book.authorId == id),
  },

  Mutation: {
    createAuthor: (parent, { author, age }, me) => {
      const id = authors.length + 1;
      authors.push({ id, author, age, books: [] });
      console.log(authors.slice(-1));
      return authors.slice(-1)[0];
    },
    createBook: (parent, { title, subtitle, description, authorId }, me) => {
      books.push({
        id: books.length + 1,
        title,
        subtitle,
        published: new Date().toDateString(),
        description,
        authorId,
      });
      return books.slice(-1)[0];
    },
  },
};

module.exports = resolvers;
