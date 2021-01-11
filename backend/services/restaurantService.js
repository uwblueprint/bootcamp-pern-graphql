import db from "../models/index";

async function getRestaurant(id) {
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

    if (updateResult[0] === 0) {
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
