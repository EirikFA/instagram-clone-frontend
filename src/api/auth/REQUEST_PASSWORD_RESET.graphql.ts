import { gql } from "@apollo/client";

export default gql`
  mutation RequestPasswordReset ($email: EmailAddress!) {
    requestPasswordReset(email: $email)
  }
`;
