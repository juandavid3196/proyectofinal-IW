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


export {GET_MATERIALS,GET_INVENTORIES};