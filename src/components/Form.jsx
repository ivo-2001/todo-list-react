import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

function Form({ setTodos }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      setTodos((prev) => [
        ...prev,
        { id: uuidv4(), text: text, completed: false },
      ]);
      setText("");
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a New TODO..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">
        <span>
          <FaPlus />
        </span>
      </button>
    </form>
  );
}

export default Form;
