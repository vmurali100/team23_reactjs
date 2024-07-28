import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
