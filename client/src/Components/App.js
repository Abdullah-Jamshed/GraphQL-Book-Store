import React, { useRef } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// STYLES
import classes from "../styles/App.module.css";

// COMPONENTS
import BookListSection from "./BookListSection";
import DetailSection from "./DetailSection";

// ContextApi
import { BookProvider } from "../ContextApi";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:8080/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  link: link,
});

const App = () => {
  const refDetail = useRef();
  return (
    <ApolloProvider client={client}>
      <BookProvider>
        <div className={classes.App}>
          <BookListSection refDetail={refDetail} />
          <DetailSection refDetail={refDetail} />
        </div>
      </BookProvider>
    </ApolloProvider>
  );
};

export default App;
