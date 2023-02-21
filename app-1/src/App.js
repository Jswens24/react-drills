import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');

  const handleInput = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div className="App">
      <input onChange={handleInput} />
      <h1>{title}</h1>
    </div>
  );
}

export default App;
