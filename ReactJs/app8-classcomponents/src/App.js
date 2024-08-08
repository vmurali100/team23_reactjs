import logo from './logo.svg';
import './App.css';
import { Student } from './Components/Student';
import { User } from './Components/User';
import { UsersClassCRUD } from './Components/UsersClassCRUD';

function App() {
  return (
    <div className="App">
      <Student/>
      <User/>
      <UsersClassCRUD/>
    </div>
  );
}

export default App;
