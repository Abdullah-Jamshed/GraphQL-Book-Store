import { gql } from "@apollo/client";

export const BOOKS_BY_ID = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      subtitle
      description
      published
      authorId
    }
  }
`;

export const ALL_BOOKS = gql`
  query Books($booksLimit: Int, $booksCurrentPage: Int) {
    books(limit: $booksLimit, currentPage: $booksCurrentPage) {
      id
      title
      subtitle
      description
      published
      authorId
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation ($createBookTitle: String!, $createBookSubtitle: String!, $createBookDescription: String!, $createBookAuthorId: ID!) {
    createBook(title: $createBookTitle, subtitle: $createBookSubtitle, description: $createBookDescription, authorId: $createBookAuthorId) {
      id
      title
      subtitle
      published
      authorId
    }
  }
`;

export const CREATE_AUTHOR = gql`
  mutation ($createAuthorAuthor: String!, $createAuthorAge: Int!) {
    createAuthor(author: $createAuthorAuthor, age: $createAuthorAge) {
      id
      author
      age
      books {
        id
        title
        published
      }
    }
  }
`;
