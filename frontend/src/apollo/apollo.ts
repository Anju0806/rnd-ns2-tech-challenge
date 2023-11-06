// apollo.ts

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Set the URL of your GraphQL server
const serverURL = 'http://localhost:4000/graphql'; // Replace with your server's URL

// Create an HTTP link to your GraphQL server
const httpLink = new HttpLink({
  uri: serverURL,
  // Add headers for authentication
  // headers: {
  //   Authorization: `Bearer ${yourAuthToken}`,
  // },
});

// Create a new Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
