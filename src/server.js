import express from "express";
import { ApolloServer, gql } from "apollo-server-express";


const typeDefs = gql`
type Query {
  hello: String
}
`;

// Provide resolver functions for your schema fields
const resolvers = {
Query: {
  hello: () => 'Hello world!',
},
};

//Apollo Graphql server setup (See Documentation)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);