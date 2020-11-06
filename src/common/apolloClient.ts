import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const { REACT_APP_API_URL, REACT_APP_GH_TOKEN } = process.env;

const httpLink = new HttpLink({
  uri: REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${REACT_APP_GH_TOKEN}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
