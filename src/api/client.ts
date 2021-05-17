import { ApolloClient, InMemoryCache } from "@apollo/client";
import fragmentMatcher from "@generated/fragmentMatcher";

export default new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache({ possibleTypes: fragmentMatcher.possibleTypes }),
  credentials: "same-origin"
});
