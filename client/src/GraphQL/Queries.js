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
  query Books($booksCurrentPage: Int) {
    books {
      total
      page
      books(currentPage: $booksCurrentPage) {
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
