import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import resolvers from "./Graphql/resolvers";
import typeDefs from "./Graphql/schema";



import  ConnectDB from "./controllers/connectDB";

dotenv.config(); 


// Apollo GraphQL server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  
});

const app = express();
app.use('/', express.static('dist'))

const PORT = process.env.PORT || 5000;

// Apply Apollo middleware to Express
server.applyMiddleware({ app });

// Start the Express server
const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    app.listen(PORT, () =>
      console.log(`DB CONNECTED & app listening on port: ${PORT}...`)
    );
  } catch (error) {
    console.log(error.message);
  }
};
  start();