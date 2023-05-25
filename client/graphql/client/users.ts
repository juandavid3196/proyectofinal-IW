import { gql } from "@apollo/client";

const GET_USERS = gql`
  query Users {
    users {
      id
      emailVerified
      email
      role {
        name  
      }
    }
  }
`

const GET_USER = gql`
query User($email: String!) {
  user(email: $email) {
    name
    email
    role {
      name
    }
  }
}
`;
export {GET_USERS,GET_USER};