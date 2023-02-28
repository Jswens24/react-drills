import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/details'>Details</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
