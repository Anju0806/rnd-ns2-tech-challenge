import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './company/graphql'; // Import your GraphQL schema and resolvers
import resolvers from './company/resolvers';

const app = express();

// Connect to MongoDB using your configuration
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-challenge',
    {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    }
  );
  

const PORT = process.env.PORT || 3001;

// Create an instance of Apollo Server and set up GraphQL schema and resolvers
const server = new ApolloServer({
    typeDefs, // Your GraphQL schema
    resolvers, // Your GraphQL resolvers
  });
  
  // Asynchronously start the Apollo Server
  server.start().then(() => {
    // Apply the Apollo Server middleware to the Express app
    server.applyMiddleware({ app });
  
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://127.0.0.1:${PORT}${server.graphqlPath}`);
    });
  });
  
  
  
  
