import "./App.css";
import ToDoList from "./ToDoList";
import React, { useRef, useState } from "react";
function App() {
  const [TodoList, SetTodoList] = useState([]);
  const ref = useRef(null);
  const addTask = () => {
    const inputValue = ref.current.value;
    SetTodoList((prevList) => {
      return [
        ...prevList,
        { id: prevList.length, name: inputValue, completed: false },
      ];
    });
    ref.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={addTask}>タスクを追加</button>
      <button>タスクを削除</button>
      <hr />
      <ToDoList todoItems={TodoList} />
    </div>
  );
}

export default App;
