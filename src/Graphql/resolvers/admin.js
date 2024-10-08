
import dotenv from "dotenv";
import Admin from "../../models/Admin";
dotenv.config();

const adminResolver = {
  Query: {
   
   
  },
  Mutation: {
    create_admin: async (_, { first_name, last_name, email, password }) => {
        const newAdmin = new Admin({ first_name, last_name, email, password });
        const savedAdmin = await newAdmin.save();
        return savedAdmin; 
    },
},


};

export default adminResolver;
