import { database } from "../db/database.js";

export const getAllTodosCtrl = (req, res) => {
  const user = req.user;
  const todos = database.todos.filter((todo) => todo.owner === user.id);

  res.json({ todos });
};

export const createTodoCtrl = (req, res) => {
  const user = req.user;
  const { title, completed } = req.body;
  const newTodo = {
    id: database.todos.length + 1,
    title,
    completed,
    owner: user.id,
  };
  database.todos.push(newTodo);
  res.json({ todo: newTodo });
};

export const updateTodoCtrl = (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const { title, completed } = req.body;
  const todoIndex = database.todos.findIndex(
    (todo) => todo.id === Number(id) && todo.owner === user.id
  );
  if (todoIndex === -1) {
    res.sendStatus(404);
    return;
  }

  database.todos[todoIndex] = {
    ...database.todos[todoIndex],
    title,
    completed,
  };

  res.json({ todo: database.todos[todoIndex] });
};

export const deleteTodoCtrl = (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const todoIndex = database.todos.findIndex(
    (todo) => todo.id === Number(id) && todo.owner === user.id
  );
  if (todoIndex === -1) {
    res.sendStatus(404);
    return;
  }

  database.todos.splice(todoIndex, 1);
  res.sendStatus(204);
};
