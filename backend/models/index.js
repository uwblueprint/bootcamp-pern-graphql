import Sequelize from "sequelize";

const sequelize = new Sequelize(
    `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.POSTGRES_DB}`
);

const db = {
    Restaurant: require("./restaurant")(sequelize, Sequelize),
    User: require("./user")(sequelize, Sequelize)
};

Object.keys(db).forEach(key => {
    if ("associate" in db[key]) {
      db[key].associate(db);
    }
});
 
export { sequelize };
export default db;
