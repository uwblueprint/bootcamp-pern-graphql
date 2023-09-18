import { GraphQLError } from "graphql";
import restaurantService from "../services/restaurantService";

/**
 * from the Apollo docs: a resolver is a function that's responsible for populating the data for a single field in your schema
 *
 * for each of our queries and mutations, we must define how the fields in their results are computed
 * suppose we are executing this query (finding the restaurant with id = 1 and returning all of its fields):
 *
 * {
 *   restaurant(id: 1) {
 *     id
 *     name
 *     address
 *     type
 *     budget
 *     description
 *     rating
 *   }
 * }
 *
 * we expect this response:
 *
 * "restaurant": {
 *   "id": "1",
 *   "name": "Campus Pizza",
 *   "address": "160 University Ave W #2, Waterloo, ON N2L 3E9",
 *   "type": "Pizzeria",
 *   "budget": "LOW",
 *   "description": "giant slices, affordable prices",
 *   "rating": 2
 * }
 *
 * the resolver for the restaurant Query (lines 42-44) fetches the necessary data through restaurantService and serializes the requested fields for the response
 * (the serialization is automatically handled by Apollo)
 * note the arguments for the resolver function:
 * - the first, _parent, is currently unused, but it contains the previously resolved field
 * - the second consists of arguments to the query / mutation (using destructured syntax in this case)
 */
const restaurantResolvers = {
    Query: {
      restaurant: async (_parent, { id }) => {
        return await restaurantService.getRestaurant(id);
      },
      restaurants: async () => {
        return await restaurantService.getRestaurants();
      }
    },
    Mutation: {
      createRestaurant: async (_parent, { name, address, type, budget, description, rating, ratingScore }) => {
        validateRating(rating);

        return await restaurantService.createRestaurant(name, address, type, budget, description, rating, ratingScore );
      },
      updateRestaurant: async (_parent, { id, name, address, type, budget, description, rating, ratingScore }) => {
        validateRating(rating);
        
        return await restaurantService.updateRestaurant(id, name, address, type, budget, description, rating, ratingScore );
      },
      deleteRestaurant: async (_parent, { id }) => {
        return await restaurantService.deleteRestaurant(id);
      }
    }
};

function validateRating(rating) {
  if (rating !== null && (rating < 1 || rating > 5)) {
    throw new GraphQLError("Rating must be an integer between 1-5");
  }
}

export default restaurantResolvers;
