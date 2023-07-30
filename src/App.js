import "./App.css";
import ToDoList from "./ToDoList";
import React, { useRef, useState } from "react";
function App() {
  const [TodoList, SetTodoList] = useState([
    {
      id: 1,
      name: "",
      completed: false,
    },
  ]);
  const ref = useRef(null);
  const addTask = () => {
    const inputValue = ref.current.value;
    SetTodoList((prevList) => {
      return [...prevList, { id: 1, name: inputValue, completed: false }];
    });
    ref.current.value = "";
  };

  return (
    <div>
      <ToDoList todoItems={TodoList} />
      <input type="text" ref={ref} />
      <button onClick={addTask}>タスクを追加</button>
      <button>タスクを削除</button>
    </div>
  );
}

export default App;
