import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false)
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: uuidv4(),
      title: input,
    };

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    setInput("");
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  const onUpdateNote = (updatedNote) => {
    setEdit(true)
    setInput(updatedNote)
    const updatedNotesArr = todos.map((todo) => {
      if (todo.id === updatedNote.id) {
        return {updatedNote};
      }

      return {todo};
    });

    setInput({updatedNotesArr});
  };

  return (
    <div>
      <div>
        <form className="todo-form">
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            className="todo-input"
            value={input}
            onChange={handleChange}
          />

          <button className="todo-button" onClick={handleSubmit}>
            Add todo
          </button>
        </form>

        {todos.map((todo) => (
          <div key={todo.id}>
            <span>{todo.title}</span>

            <button onClick={() => removeTodo(todo.id)}> remove </button>

            <button onClick={() => onUpdateNote({todo})}> Edit </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;