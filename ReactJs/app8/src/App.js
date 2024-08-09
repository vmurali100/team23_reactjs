import logo from './logo.svg';
import './App.css';
import { UserClassCRUD } from './Components/UserclassCRUD';
import { UserClassLocalServerCRUD } from './Components/UsersclassCRUD-local-server';

function App() {
  return (
    <div className="App">
      {/* <UserClassCRUD/> */}
      <UserClassLocalServerCRUD/>
    </div>
  );
}

export default App;
