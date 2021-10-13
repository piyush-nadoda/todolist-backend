const Todo = require("../../models/todo");

const getSingleTodo = async (req, res) => {
    const todoId = req.params.id;
    const todoData = await Todo.findOne({where:{todoId}})
    if(todoData){
        res.send({
            todoId: todoData.todoId,
            userId: todoData.userId,
            todo: todoData.todo,
            description: todoData.description
        })
    } else {
        res.send({
            message: "Something went wrong",
            success: false
        })
    }
 }
 
 module.exports = getSingleTodo;