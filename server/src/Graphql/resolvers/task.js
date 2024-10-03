
import dotenv from "dotenv";
import Task from "../../models/Task";
dotenv.config();

const taskResolver = {
  Query: {
    async getTasks() {
      try {
        const tasks = await Task.find(); // Use task model to find tasks
        return tasks;
      } catch (err) {
        throw new Error(err.message); // Correct error handling
      }
    },

   
  },
  Mutation: {
    create_task: async (_, { url, verify }) => {
        const newTask = new Task({ url, verify });
        const savedTask = await newTask.save();
        return savedTask; // Return the saved task
    },
},

};

export default taskResolver;
