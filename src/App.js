import "./App.css";
import ToDoList from "./ToDoList";
import React, { useState } from "react";
function App() {
  const [TodoList, SetTodoList] = useState(["test1", "test2"]);
  return (
    <div>
      <ToDoList todoItems={TodoList} />
    </div>
  );
}

export default App;
