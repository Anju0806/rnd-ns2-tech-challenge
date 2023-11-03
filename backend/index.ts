import express from 'express';
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeResolvers } from "@graphql-tools/merge";
import companyTypes from "./domains/company/graphql/index";
import companyResolver from "./domains/company/resolvers/index";

const executableSchema = makeExecutableSchema({
  typeDefs: [ companyTypes ], // the schema types
  resolvers: mergeResolvers([ companyResolver ]), // Merge and use - the specified resolvers
});

const app = express()
 
// Create a GraphQL server using the executable schema
const yoga = createYoga({ schema: executableSchema })
 
//Using GraphQL endpoint server to listen on port 4000
app.use(yoga.graphqlEndpoint, yoga)
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
})
