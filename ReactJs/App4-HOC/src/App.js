import logo from './logo.svg';
import './App.css';
import ClicCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClicCounter/>
       <hr/>
       <HoverCounter/>
    </div>
  );
}

export default App;
