import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

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

  const editTodo = (oldTodo) => {
    // oldTodo = {
    //   id: "",
    //   title: "",
    // };
    // const updatedTodos = [{ id: "1", title: "Elie" }];
    // todos.filter((todo) => {
    //   console.log("Todo Id", todo.id);
    //   // return todo;
    // });
    // setState({ todos });
  };

  // bas tekbes 3al edit button
  // add the todo title to the input box
  // Change the add todo button to confirm button

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

            <button onClick={() => editTodo(todo)}> Edit </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoForm;