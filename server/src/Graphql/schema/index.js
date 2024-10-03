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
}

type Task {
    id: ID!
    url: String!
    verify: String!
}

`;