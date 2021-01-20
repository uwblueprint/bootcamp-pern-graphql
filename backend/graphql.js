/**
 * the GraphQL schema defines the data graph and the API (i.e. what we can do with the data graph)
 * it contains type definitions and resolvers that define how data values are computed
 *
 * there are 2 special type definitions: Query and Mutation. They are the entrypoints into our API
 * (there is actually a third special type called Subscription but we will not be working with it)
 */

import { makeExecutableSchema, gql } from "apollo-server-express";
import { merge } from "lodash";

import restaurantType from "./types/restaurantType";
import restaurantResolvers from "./resolvers/restaurantResolvers";

/**
 * base Query type definition, other queries extend this
 * Query is used for read operations
 *
 * the gql tag is used to signal GraphQL syntax highlighting in IDEs and editors (the actual type definition is a string literal)
 * VS Code extension: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
 */
const query = gql`
  type Query {
    _empty: String
  }
`;

/**
 * base Mutation type definition, other mutations extend this
 * Mutation is used for write operations
 */
const mutation = gql`
  type Mutation {
    _empty: String
  }
`;

/**
 * combine the typeDefs and resolvers
 * click into restaurantType and restaurantResolvers to learn more about typeDefs and resolvers
 */
const executableSchema = makeExecutableSchema({
    typeDefs: [
      query,
      mutation,
      restaurantType
    ],
    resolvers: merge(
        restaurantResolvers
    )
});

export default executableSchema;
