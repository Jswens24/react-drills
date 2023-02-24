import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import TodoListDisplay from './TodoListDisplay';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState('');


  const addTodoHandler = () => {
    setTodoList([...todoList, userInput])
    setUserInput('')
  }

  return (
    <div className="App">
      <h1>My to-do list:</h1>
      <input onChange={e => setUserInput(e.target.value)} placeholder='add new todo' />
      <button onClick={addTodoHandler}>Add</button>
      <TodoListDisplay todoList={todoList} />
    </div>
  );
}

export default App;
