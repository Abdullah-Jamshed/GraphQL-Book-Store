const books = require("../../data/books.json");
const authors = require("../../data/authors.json");
const fetch = require("node-fetch");

const resolvers = {
  Query: {
    books: async (parent) => {
      const data = await (await fetch("https://api.itbook.store/1.0/new")).json();
      return data;
    },
    book: async (parent, { id }) => {
      const data = await (await fetch(`https://api.itbook.store/1.0/books/${id}`)).json();
      return data;
    },
    searchedBooks: async (parent, { currentPage, searchedInput }) => {
      const data = await (await fetch(`https://api.itbook.store/1.0/search/${searchedInput}/${currentPage}`)).json();
      return data;
    },
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
