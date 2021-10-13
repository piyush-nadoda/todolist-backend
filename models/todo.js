const db = require("../database/database");
const { DataTypes } = require("sequelize");
const User = require("./user");

const Todo = db.define("todo", {
  todoId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

Todo.belongsTo(User, {
  as: "Current",
  foreignKey: "userId",
  constraints: false,
});

module.exports = Todo;
