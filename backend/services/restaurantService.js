/**
 * db is our data access object, an abstraction layer on top of our PostgreSQL database
 * the ORM (object-relational mapper) that we are using is Sequelize
 */
import db from "../models/index";


/**
 * while our business logic is really simple so far, it is beneficial to keep it apart from the resolver logic
 * separation of concerns leads to maintainable code as the application grows, and also makes the code easier to unit test
 */

async function getRestaurant(id) {
    /**
     * Restaurant is a Sequelize model, so we can use Sequelize methods like findByPk (find by primary key)
     * view the Sequelize v6 docs at https://sequelize.org/master/index.html for more available methods
     */
    return await db.Restaurant.findByPk(id);
}

async function getRestaurants() {
    return await db.Restaurant.findAll();
}

async function createRestaurant(name, address, type, budget, description, rating) {
    return await db.Restaurant.create({
        name,
        address,
        type,
        budget,
        description,
        rating
    });
}

async function updateRestaurant(id, name, address, type, budget, description, rating) {
    const updateResult = await db.Restaurant.update({
        name,
        address,
        type,
        budget,
        description,
        rating
    },
    {
        returning: true,
        where: { id: id }
    });

    /**
     * Sequelize's update() method returns an array.
     * the first element is the number of records updated,
     * the second element is an array of the records updated */
    if (updateResult[0] === 1) {
        return updateResult[1][0];
    } else {
        return null;
    }
}

async function deleteRestaurant(id) {
    const deleteResult = await db.Restaurant.destroy({
        where: { id: id }
    });

    if (deleteResult === 1) {
        return id;
    } else {
        return null;
    }
}

const restaurantService = { getRestaurant, getRestaurants, createRestaurant, updateRestaurant, deleteRestaurant };
export default restaurantService;
