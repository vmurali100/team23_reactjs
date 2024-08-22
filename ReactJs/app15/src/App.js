import { useSelector } from 'react-redux';
import './App.css';
import UserDetails from './Components/UserDetails';

function App() {
  const users = useSelector((state)=>state.users);
  console.log(users)
  
  return (
    <div className="App">
      <UserDetails/>
    </div>
  );
}

export default App;
