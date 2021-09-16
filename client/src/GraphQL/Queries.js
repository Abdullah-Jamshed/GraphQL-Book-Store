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
