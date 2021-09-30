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
  },
};

module.exports = resolvers;
