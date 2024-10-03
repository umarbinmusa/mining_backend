// src/resolvers/index.js
import taskResolver from './task'; // Adjust path as needed

const resolvers = {
  Query: {
    getTasks: taskResolver.Query.getTasks, // Ensure this is correctly referencing getTasks
  },
  Mutation: {
    create_task: taskResolver.Mutation.create_task,
  },
};

export default resolvers;
