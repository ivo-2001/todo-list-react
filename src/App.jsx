import React, { useState } from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTodos =
    filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "uncompleted"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <main>
      <header className="header">
        <h1>TODO LIST</h1>
      </header>
      <div className="container">
        <Form setTodos={setTodos} />
        <div className="dropdown">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div className="todos">
          {filteredTodos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                id={todo.id}
                setTodos={setTodos}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
