import { gql } from "@apollo/client";

export default gql`
  mutation Login ($identifier: String!, $password: String!) {
    login (identifier: $identifier, password: $password) {
      token
    }
  }
`;
