import React, { useState } from "react";
import { FaCheckCircle, FaCircle, FaTrash } from "react-icons/fa";

function TodoItem({ text, completed, id, setTodos }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleRemoveTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = () => {
    setIsCompleted(!isCompleted);
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }; // Return modified todo
        }
        return todo; // Return unmodified todos
      })
    );
  };

  return (
    <div className="todo-item">
      <p>{text}</p>
      <div className="todo-item-buttons">
        <button className="complete-button" onClick={handleCompleteTodo}>
          {isCompleted ? (
            <span>
              <FaCheckCircle />
            </span>
          ) : (
            <span>
              <FaCircle />
            </span>
          )}
        </button>
        <button className="remove-button" onClick={handleRemoveTodo}>
          <span>
            <FaTrash />
          </span>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
