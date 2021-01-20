/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurant PostgreSQL table */
    const Restaurant = sequelize.define("restaurant", {
        /* sequelize automatically defines an id column as primary key */
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        budget: {
            type: DataTypes.ENUM,
            values: ["LOW", "MEDIUM", "HIGH"]
        },
        description: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
        },
    },
    {
        timestamps: false
    });

    return Restaurant;
}
