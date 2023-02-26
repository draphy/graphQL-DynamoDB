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
            id
        }
    }
`;
