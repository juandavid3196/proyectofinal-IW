import { gql } from "@apollo/client";

const GET_USERS = gql`
query Users {
    users {
      id
      name
      email
      password
    }
  }
`
export {GET_USERS};