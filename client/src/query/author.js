import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const getAuthorsQuery = gql`
  {
    authors {
      name
      Id
    }
  }
`;

export const addAuthorMutation = gql`
  mutation addAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
    }
  }
`;
