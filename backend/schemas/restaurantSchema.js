import { gql } from "apollo-server-express";

const restaurantSchema = gql`
    enum Budget {
        LOW
        MEDIUM
        HIGH
    }

    type Restaurant {
        id: ID!
        name: String
        address: String
        type: String
        budget: Budget
        description: String
        rating: Int
    }

    extend type Query {
        restaurant(id: ID!): Restaurant
        restaurants: [Restaurant!]!
    }

    extend type Mutation {
        createRestaurant(name: String!, address: String, type: String, budget: Budget, description: String, rating: Int) : Restaurant
        updateRestaurant(id: ID!, name: String!, address: String, type: String, budget: Budget, description: String, rating: Int) : Restaurant
        deleteRestaurant(id: ID!) : ID
    }
`;

export default restaurantSchema;
