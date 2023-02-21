import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const data = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleChange} />
      {data.filter(item => {
        console.log(item);
        return item.includes(search)
      }).map(el => {
        console.log(el);
        return (
          <h2>{el}</h2>
        )
      })}
    </div>
  );
}

export default App;
