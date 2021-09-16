import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";


// STYLES
import "../styles/App.css";

// COMPONENTS
import GetUsers from "./GetUsers";
import Form from "./Form";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:8080/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1 className='heading'>GraphQL apollo-client / graphql-express </h1>
      {/* <Form /> */}
      <GetUsers />
    </ApolloProvider>
  );
};

export default App;
