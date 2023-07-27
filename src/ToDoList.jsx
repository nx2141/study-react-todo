import React from "react";

const ToDoList = (props) => {
  return (
    <div>
      <ul>
        {props.todoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
