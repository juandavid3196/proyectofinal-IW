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
mutation CreateMaterial($name: String!, $balance: Int!) {
  createMaterial(name: $name, balance: $balance) {
  id
  name
  }
}
`;


export {GET_MATERIALS,GET_INVENTORIES,CREATE_MATERIAL};