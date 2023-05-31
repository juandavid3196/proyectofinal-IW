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
    roles: [Role]
    user(email:String!):User
    materials : [Material]
    inventories(id:String!):[Inventory]
  }

  type Mutation {
    updateUser(id:ID!,role:String):User
    createMaterial(name:String!,balance:Int!):Material
    createInventory(input:Int!,output:Int,createdBy:String,material:String):Inventory
  }
`;

export {typeDefs}
