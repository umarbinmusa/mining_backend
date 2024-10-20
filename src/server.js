import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import resolvers from "./Graphql/resolvers";
import typeDefs from "./Graphql/schema";
import ConnectDB from "./controllers/connectDB";
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';

dotenv.config();

// Apollo GraphQL server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));

// Apollo server middleware
server.applyMiddleware({ app });

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler to serve the index.html file
app.get("*", (req, res) => {
  console.log(`Received request for ${req.url}`);
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

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



process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  process.exit(0);
});


start();
