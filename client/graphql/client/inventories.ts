import { gql } from "@apollo/client";

const CREATE_INVENTORY = gql`
mutation CreateInventory($input: Int!, $output: Int, $createdBy: String, $material: String) {
    createInventory(input: $input, output: $output, createdBy: $createdBy, material: $material) {
      id
      input
      output
      createdAt
    }
  }
`;

export {CREATE_INVENTORY};