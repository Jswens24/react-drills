import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NewTask from './NewTask';
import DisplayList from './DisplayList';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <NewTask setTodoList={setTodoList} todoList={todoList} />
      <DisplayList todoList={todoList} />
    </div>
  );
}

export default App;
