import React from "react";

const TodoList = ({ todo }) => {
  return (
    <tr>
      <td>{todo.date}</td>
      <td>{todo.title}</td>
      <td>{todo.extra}</td>
    </tr>
  );
};

export default TodoList;
