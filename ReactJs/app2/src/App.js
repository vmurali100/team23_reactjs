import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import ParentComponent from './components/ParentComponent';


function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <ParentComponent/>
    </div>
  );
}

export default App;
