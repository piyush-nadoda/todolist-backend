const {Sequelize} = require("sequelize")
const {DB_LINK} = require("../env")
const database = new Sequelize(DB_LINK, {
  logging: false,
  dialectOptions: {
    ssl: true,
  },
});

module.exports = database;