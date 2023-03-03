import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const getBooksQuery = gql`
  {
    books {
      name
      Id
    }
  }
`;

export const addBookMutation = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
    }
  }
`;

export const getBookQuery = gql`
  query GetBook($Id: ID) {
    book(Id: $Id) {
      Id
      name
      genre
      author {
        Id
        name
        age
        books {
          name
          Id
        }
      }
    }
  }
`;
