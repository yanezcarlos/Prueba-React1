// import res from "express/lib/response";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MiApi.css";

const MiApi = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await fetch("https://api.victorsanmartin.com/feriados/en.json");
    const data = await res.json();
    // console.log(data.data[0].title);
    setTodos(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //   const filterTodos = todos.filter((item) => true);
  const filterTodos = todos.filter(
    (todo) =>
      todo.date.toLowerCase().includes(search.toLowerCase()) ||
      todo.title.toLowerCase().includes(search.toLowerCase()) ||
      todo.extra.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
      className="input"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {filterTodos.map((todo, i) => (
            <tr key={i}>
              <td>{todo.date}</td>
              <td>{todo.title}</td>
              <td>{todo.extra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiApi;
