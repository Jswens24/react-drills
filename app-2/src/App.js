import logo from './logo.svg';
import './App.css';

function App() {
  const data = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']

  return (
    <div className="App">
      {data.map(el => {
        return (
          <h2>{el}</h2>
        )
      })}
    </div>
  );
}

export default App;
