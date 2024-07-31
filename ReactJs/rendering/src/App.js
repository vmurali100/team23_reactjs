import logo from './logo.svg';
import './App.css';
import RenderMain from './Components/renderingmain';
import RenderChild from './Components/renderingchills';
import ClickCounter from './Components/ClickCounter';
import HoverCounterxd from './Components/HoverConterxd';
import Counter1 from './components1/counter';

function App() {
  return (
    <div className="App">
      {/* <h2>This is from main component</h2>
      <hr/> */}
      {/* <RenderMain/>  */}
      <Counter1/>
      {/* {<ClickCounter/>
      <hr/>
      <HoverCounterxd/>  */}
    </div>
  );
}

export default App;
