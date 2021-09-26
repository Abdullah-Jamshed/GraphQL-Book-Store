import { gql } from "@apollo/client";

export const BOOKS_BY_ID = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      subtitle
      desc
      publisher
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
  query Books($booksCurrentPage: Int) {
    total
    books(currentPage: $booksCurrentPage) {
      id
      title
      subtitle
      desc
      publisher
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
