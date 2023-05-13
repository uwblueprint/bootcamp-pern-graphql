/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurant PostgreSQL table */
    const RestaurantGroup = sequelize.define(
      "restaurantgroup",
      {
        /* sequelize automatically defines an id column as primary key */
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        restaurantIds: {
          type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
      },
      {
        timestamps: false,
      }
    );

    return RestaurantGroup;
}
