import { gql } from "@apollo/client";

const GET_MATERIALS = gql`
query Material {
    materials {
      id
      name
      createdAt
      balance
    }
  }
`;

const GET_INVENTORIES = gql`
query Inventories($inventoriesId: String!) {
  inventories(id: $inventoriesId) {  
    id
    input
    output
    createdAt
   }
}
`;

const CREATE_MATERIAL = gql`
mutation Mutation($name: String!, $balance: Int!, $createdBy: String!) {
  createMaterial(name: $name, balance: $balance, createdBy: $createdBy) {
    id
    balance
    name
    createdAt
  }
}

`;


export {GET_MATERIALS,GET_INVENTORIES,CREATE_MATERIAL};