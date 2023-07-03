import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Search from "../Search/Search";
import Table from "../Table/Table";
import "./MiApi.css";

const MiApi = () => {
  const [todos, setTodos] = useState([]);
  // const [resultTodos, setResultTodos] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await fetch("https://api.victorsanmartin.com/feriados/en.json");
    // console.log(res);
    const data = await res.json();
    setTodos(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterTodos = todos.filter(
    (todo) =>
      todo.date.includes(search) ||
      todo.title.toLowerCase().includes(search.toLowerCase()) ||
      todo.extra.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />

      <Table filterTodos={filterTodos} />

      {/* <table>
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
      </table> */}
    </div>
  );
};

export default MiApi;
