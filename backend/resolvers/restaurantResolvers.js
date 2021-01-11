import { GraphQLError } from "graphql";
import restaurantService from "../services/restaurantService";

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
      createRestaurant: async (_parent, { name, address, type, budget, description, rating }) => {
        validateRating(rating);

        return await restaurantService.createRestaurant(name, address, type, budget, description, rating);
      },
      updateRestaurant: async (_parent, { id, name, address, type, budget, description, rating }) => {
        validateRating(rating);
        
        return await restaurantService.updateRestaurant(id, name, address, type, budget, description, rating);
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
