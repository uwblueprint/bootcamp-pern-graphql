import { makeExecutableSchema, gql } from "apollo-server-express";
import { merge } from "lodash";

import restaurantSchema from "./schemas/restaurantSchema";
import restaurantResolvers from "./resolvers/restaurantResolvers";

/* base query schema, other queries extend this */
const query = gql`
  type Query {
    _empty: String
  }
`;

/* base mutation schema, other mutations extend this */
const mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const executableSchema = makeExecutableSchema({
    typeDefs: [
      query,
      mutation,
      restaurantSchema
    ],
    resolvers: merge(
        restaurantResolvers
    )
});

export default executableSchema;
