import { gql } from "@apollo/client";

export const BOOK_BY_ID = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      title
      subtitle
      desc
      language
      pages
      price
      publisher
      rating
      url
      authors
    }
  }
`;

export const LATEST_BOOKS = gql`
  query Books {
    books {
      total
      page
      books {
        isbn13
        title
        image
      }
    }
  }
`;

export const SEARCHED_BOOKS = gql`
  query SearchedBooks($currentPage: Int, $searchedInput: String) {
    searchedBooks(currentPage: $currentPage, searchedInput: $searchedInput) {
      total
      page
      books {
        isbn13
        title
        image
      }
    }
  }
`;
