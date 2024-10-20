import { gql } from "apollo-server-express";

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    getTasks: [Task]
    getTask(id: ID!): Task
}

type Mutation {
    create_task(url: String!, verify: String!): Task
    create_admin(first_name: String!, last_name: String!, email: String!, password: String!): Admin
}

type Task {
    id: ID!
    url: String!
    verify: String!
}
type Admin {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
}

`;