const db = require("../database/database")
const {DataTypes} = require("sequelize")

const User = db.define("user",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = User;