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
export {GET_USERS};