import logo from './logo.svg';
import './App.css';
import Login from './components/Login';

function App() {
  const user = {
    name:"Omkar Teli",
    email:"omkarteli8055@gmail.com",
    password:"12345678"
  }
  return (
    <div>
      <Login user={user}/>
    </div>
  );
}

export default App;
