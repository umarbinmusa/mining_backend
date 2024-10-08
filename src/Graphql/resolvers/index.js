import taskResolver from './task'; 
import adminResolver from './admin';

const resolvers = {
  Query: {
    getTasks: taskResolver.Query.getTasks, 
  },
  Mutation: {
    create_task: taskResolver.Mutation.create_task,
    create_admin: adminResolver.Mutation.create_admin,
  },
};

export default resolvers;
