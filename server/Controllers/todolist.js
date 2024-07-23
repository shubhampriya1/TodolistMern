import { todosmodel } from "../model/todolist.js";

export async function addTodo(req, res) {
  const { task } = req.body;
  try {
    if (!task) {
      return res.status(400).send("plaese not found");
    }
    const todo = await todosmodel.create({
      task: task,
    });
    return res.status(201).send(todo);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
}

export async function alltodos(req, res) {
  try {
    const todos = await todosmodel.find();
    return res.status(200).send(todos);
  } catch (error) {
    return res.status(500).send("server error");
  }
}

export async function update(req, res) {
  const { id, task } = req.body;
  if (!id || !task) {
    return res.status(404).send("Todo not found");
  }
  try {
    const newtodo = await todosmodel.findByIdAndUpdate(id, {
      task: task,
    });

    return res.status(200).send("succesfully update");
  } catch (error) {
    return res.status(500).send(" Intenal server error");
  }
}
export async function deleteTodo(req, res) {
  const { id } = req.params;
  console.log(req);
  try {
    const deleteTodo = await todosmodel.findByIdAndDelete({ _id: id });
    if (!deleteTodo) {
      return res.status(404).send("todo not found");
    }
    return res.status(200).send("successfully delete");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
}
