import express from "express";
import { ApolloServer } from "apollo-server-express";

import schema from "./graphql";
import db, { sequelize } from "./models/index";
import seedRestaurantData from "./seedRestaurantData";

const app = express();
const server = new ApolloServer({ schema });
 
server.applyMiddleware({ app, path: "/graphql" });

/**
 * set eraseDatabaseOnSync = true if you want to seed the database or if you need to change the schema.
 * typically migrations rather than sync would be used to modify the DB schema since
 * they are safer and offer finer-grained controls, but for simplicity, we won't use migrations for bootcamp
 */
const eraseDatabaseOnSync = false;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    if (eraseDatabaseOnSync) {
        seedDb();
    }

    app.listen({ port: 5000 }, () => {
        console.info("Server is listening on port 5000!");
    });
});

async function seedDb() {
    seedRestaurantData.forEach(async (r) => {
        await db.Restaurant.create(r);
    });

    console.info("Successfully seeded the database!");
}
