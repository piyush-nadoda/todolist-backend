const { v4: uuidv4 } = require("uuid");
const Todo = require("../../models/todo");


const setTodos = async (req, res) => {
    const {todo, description} = req.body;
    if(todo){
        const todoId = uuidv4()
        const todoData = await Todo.create({
            todoId: todoId,
            todo: todo,
            description: description,
            userId: req.user.userId
        })
        res.send(todoData)
    } else {
        res.send({
            message: "Todo is not provided",
            success: false

        })
    }
 }
 
 module.exports = setTodos;