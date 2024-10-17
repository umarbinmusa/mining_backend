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
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Apollo server middleware
server.applyMiddleware({ app });

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Catch-all handler to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the Express server
const start = async () => {
  try {
    await ConnectDB(process.env.MONGODB_URI);
    app.listen(process.env.PORT || 5000, () =>
      console.log(`DB CONNECTED & app listening on port: ${process.env.PORT || 5000}...`)
    );
  } catch (error) {
    console.error("Error starting server:", error.message);
  }
};

process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  
  process.exit(0);
});

start();
