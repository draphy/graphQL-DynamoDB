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
      id
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
query GetBook($id: ID){
    book(id: $id) {
        id
        name
        genre
        author {
            id
            name
            age
            books {
                name
                id
            }
        }
    }
}
`;