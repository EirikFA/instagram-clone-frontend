import { gql } from "@apollo/client";

export default gql`
  mutation ResetPassword ($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;
