import React, {useState} from 'react';
    function TodoForm () {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([])
    const [state, setState] = useState([])
    
    const handleChange = e => {
        setInput(e.target.value);
    }
    
    const handleSubmit =e => {
        e.preventDefault();
        
        const newTodos = [input,...todos]
        setTodos(newTodos)
        console.log(...todos)
    }
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    const  editTodo = (index) => {
        const newTodo = prompt('Let\'s make something changes')
        const todos = state;
        todos.filter(todo => {
          if (todo.id === index + 1) {
            todo.title = newTodo;
          }
          return todo;
        });
        setState({ todos });
        
      }
    return  (
       <div>
           <div>
          <form className= 'todo-form'>
            <input
            type ='text'
            placeholder='Add a todo'
            value={input}
            name = 'text'
            className='todo-input'
            onChange ={handleChange}
            />
              
            <button className='todo-button' onClick={handleSubmit}>Add todo</button>  
           
            
            
           </form>
        {todos.map((todo, index) => (<div key={index}><p>{todo}</p><button onClick={() => removeTodo(index)}> remove </button></div>))}
        {todos.map((todo, index) => (<div key={index}><p>{todo}</p><button onClick={() => editTodo(index)}> update </button></div>))}
        </div>

       </div>

      
    )
}


export default TodoForm;