const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 8080 }).then(({ url }) => console.log(`🚀 GraphQL server running at ${url}`));
