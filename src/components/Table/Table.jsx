import React from "react";
import TodoList from "../TodoList/TodoList";

const Table = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Titulo</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {props.filterTodos.map((todo, i) => (
          <TodoList todo={todo} key={i} />
          // <tr key={i}>
          //   <td>{todo.date}</td>
          //   <td>{todo.title}</td>
          //   <td>{todo.extra}</td>
          // </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
