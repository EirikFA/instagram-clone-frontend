import { gql } from "@apollo/client";

export default gql`
  mutation Register ($data: RegisterInput!) {
    register(data: $data) {
      id
      email
      username
    }
  }
`;
