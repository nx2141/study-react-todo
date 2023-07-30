import React from "react";
import Todo from "./ToDo";

const ToDoList = ({ todoItems }) => {
  return todoItems.map((todo) => <Todo inputTxt={todo.name} key={todo.name} />);
};

export default ToDoList;
