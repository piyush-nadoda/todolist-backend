const Todo = require("../../models/todo");

const updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const { todo, description } = req.body;
  var updatedData;
  if (todo) {
    updatedData = { ...updatedData, todo };
    console.log(updatedData);
  }
  if (description) {
    updatedData = { ...updatedData, description };
    console.log(updatedData);
  }
  const updateTodo = await Todo.update(updatedData, {where:{todoId}})
  if(updateTodo[0] === 1){
      const todoData = await Todo.findOne({where:{todoId}})
      res.send({
          todo: todoData.todo,
          description: todoData.description
      })
  } else {
      res.send({
          message: "Provide some data to change",
          success: false
      })
  }
};

module.exports = updateTodo;
