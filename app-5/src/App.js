import logo from './logo.svg';
import './App.css';
import Image from './Image';

function App() {

  const nicCage = 'https://variety.com/wp-content/uploads/2018/05/between-worlds.jpg?w=681&h=383&crop=1'
  return (
    <div className="App">
      <Image src={nicCage} />
    </div>
  );
}

export default App;
