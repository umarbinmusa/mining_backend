import { gql } from '@apollo/client';
// Define the query to fetch tasks
export const GET_TASKS_QUERY = gql `
  query GetTasks {
    getTasks {
      id
      url
      verify
    }
  }
`;
