import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Username from './Username';
import Password from './Password';
import Button from './Button';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(username);

  return (
    <div className="App">
      <Username
        username={username}
        setUsername={setUsername}
      />
      <Password
        password={password}
        setPassword={setPassword}
      />
      <Button
        username={username}
        password={password} />
    </div>
  );
}

export default App;
