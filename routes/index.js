const express = require("express");
const getAllTodos = require("./todo/getAllTodos");
const signUp = require("./user/signUp");
const setTodo = require("./todo/setTodo");
const route = express.Router();
const login = require("./user/login");
const updateTodo = require("./todo/updateTodo");
const deleteTodo = require("./todo/deleteTodo");
const getSingleTodo = require("./todo/getSingleTodo");
const registerInitialCheck = require("../middlewares/registerInitialChecks");
const checkIfSignedIn = require("../middlewares/checkIfSignedIn");

//  To login an existing user
route.post("/login", login);

//To sign up a new user
route.post("/signup", registerInitialCheck, signUp);

//List all todos of the current user
route.get("/todos", checkIfSignedIn, getAllTodos);

//Create a new todo item
route.post("/todos", checkIfSignedIn, setTodo);

//Update an existing todo
route.put("/todos/:id", checkIfSignedIn, updateTodo);

//Delete an existing todo
route.delete("/todos/:id", checkIfSignedIn, deleteTodo);

//Get a single todo
route.get("/todos/:id", checkIfSignedIn, getSingleTodo);

module.exports = route;
