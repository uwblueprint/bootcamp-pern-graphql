/* can't use ES6 export syntax due to incompatibility with sequelize */
module.exports = (sequelize, DataTypes) => {
    /* create the model corresponding to the restaurant PostgreSQL table */
    const User = sequelize.define(
      "user",
      {
        /* sequelize automatically defines an id column as primary key */
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
        },
        role: {
          type: DataTypes.ENUM,
          values: ["ADMIN", "REGULAR"],
        },
      },
      {
        timestamps: false,
      }
    );

    return User;
}
