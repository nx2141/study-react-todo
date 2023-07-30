import React from "react";

const ToDo = ({ inputTxt }) => {
  return (
    <div>
      <input value={inputTxt} readOnly></input>
      <button>タスク完了</button>
      <button>タスクを削除</button>
    </div>
  );
};

export default ToDo;
