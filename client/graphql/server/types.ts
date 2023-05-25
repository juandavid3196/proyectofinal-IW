import { gql } from 'graphql-tag';

const typeDefs = gql`
scalar DateTime

type User {
    id: ID
    name: String
    email: String
    emailVerified : DateTime
    image: String
    role: Role
    materials: [Material]
    inventory: [Inventory]
}

type Role {
  id : ID
  name : Enum_RoleName
  users : [User]
  createdAt: DateTime
  updateAt: DateTime
}

enum Enum_RoleName {
  ADMIN
  USER
}

type Material {
  id: ID 
  name: String
  balance: Int
  createdBy: User
  inventories: [Inventory]
  createdAt: DateTime
  updateAt: DateTime
}

type Inventory {
  id: ID
  input: Int
  output: Int
  createdBy: User
  material : Material
  createdAt: DateTime
  updateAt: DateTime
}

  type Query {
    users: [User]
    user(email:String!):User
    materials : [Material]
    inventories(id:String!):[Inventory]
  }

  type Mutation {
    createMaterial(name:String!,balance:Int,createdBy:String):Material
    createInventory(input:Int!,output:Int,createdBy:String,material:String):Inventory
  }
`;

export {typeDefs}
