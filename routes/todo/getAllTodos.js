const Todo = require("../../models/todo");

const getAllTodo = async (req, res) => {
  const userId = req.user.userId;
  const todoData = await Todo.findAll({ where: { userId } });
  const todos = todoData.map((todo) => {
    const todoData = todo?.dataValues;
    return {
      todoId: todoData.todoId,
      todo: todoData.todo,
      description: todoData.description,
    };
  });
  res.send({
    todos: todos,
  });
};

module.exports = getAllTodo;
