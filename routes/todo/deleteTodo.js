const Todo = require("../../models/todo");

const deleteTodo = async (req, res) => {
    const todoId = req.params.id;
    const todoData = await Todo.destroy({where:{todoId}})
    if(todoData === 1){
        res.send({
            message: "Todo removed successfully",
            success: true
        })
    } else {
        res.send({
            message: "Something went wrong",
            success: false
        })
    }
 }
 
 module.exports = deleteTodo;