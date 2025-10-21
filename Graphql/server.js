// import { ApolloServer ,gql} from "apollo-server";
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
// import {quotes,users} from './fakedb.js'
// //schema making
// const typeDefs = gql`
//     type Query {
//         greet:String,
//         name:String
// }

// `
// //resolver
// const resolvers = {
//     Query: {
//         greet: () => {
//             return "Hello World";
//         },
//         name:()=>{
//             return "My name is ChatGPT";
//         }
//     }
// };

// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
// });

// server.listen().then(({ url }) => {
//     console.log(`Server is running at ${url}`);
// });



import { ApolloServer } from "apollo-server";
import { gql } from "apollo-server";
import typeDefs from "./schemaGql.js";
import resolvers from "./resolver.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
