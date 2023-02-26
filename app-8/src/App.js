import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [randomJoke, setRandomJoke] = useState({});

  const getJoke = () => {
    axios.get('https://v2.jokeapi.dev/joke/Any')
      .then(res => {
        setRandomJoke(res.data)
        console.log(res.data);
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    getJoke()
  }, []);


  return (
    <div className="App">
      <h1>Random Joke!</h1>
      {
        randomJoke.setup ?
          <>
            <h4>{randomJoke.setup}</h4>
            <h5>{randomJoke.delivery}</h5>
          </>
          :
          <>
            <h4>{randomJoke.joke}</h4>
          </>
      }
    </div>
  );
}

export default App;
