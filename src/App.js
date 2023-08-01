import "./App.css";
import ToDoList from "./ToDoList";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, SetTodoList] = useState([]);
  const ref = useRef(null);
  const handleAddTask = () => {
    const name = ref.current.value;
    if (name === "") return;
    console.log(name);
    SetTodoList((prevList) => {
      return [...prevList, { id: uuidv4(), name: name, completed: false }];
    });
    ref.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    SetTodoList(newTodos);
  };
  // const newTodos = [...todos];
  // ここでは、スプレッド演算子...を使って、現在のtodosステートの内容を新しい配列newTodosにコピーしています。この操作によって、todos配列の内容は変更されず、新しい参照を持つ新しい配列が作成されます。Reactのステートを直接変更せず、新しいステートを生成することで、変更をReactに正しく伝えることができます。
  // const todo = newTodos.find((todo) => todo.id === id);
  // この行では、Array.prototype.findメソッドを使用して、与えられたidと一致するidプロパティを持つ最初のオブジェクトをnewTodos配列から検索します。このオブジェクトを変数todoに代入します。
  // todo.completed = !todo.completed;
  // ここでは、先ほど見つけたtodoオブジェクトのcompletedプロパティの値を反転しています。!演算子は、値を反転させるために使用されます。従って、completedがtrueであればfalseになり、falseであればtrueになります。この操作により、タスクの完了状態がトグルされます。
  // SetTodoList(newTodos);
  // 最後に、SetTodoList関数を使用して、新しいtodos配列をステートに設定します。これにより、Reactはこの変更を検出し、関連するコンポーネントを再レンダリングします。

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    SetTodoList(newTodos);
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleAddTask}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクを削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
      <hr />
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
