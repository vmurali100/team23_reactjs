import logo from './logo.svg';
import './App.css';
import ClicCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import DoubleClickCounter from './Components/OnDubleClick';
import FocusCounter from './Components/FocusCounter';
import InputChangeCounter from './Components/InputChangeCounter';
import SubmitCounter from './Components/SubmitCounter';
import ResizeCounter from './Components/ResizeCounter'

function App() {
  return (
    <div className="App">
      <ClicCounter />
      <hr />
      <HoverCounter />
      <hr />
      <DoubleClickCounter />
      <hr />
       <FocusCounter />
       <hr/>
       <InputChangeCounter/>
       <hr/>
       <SubmitCounter/>
       <hr/>
       <ResizeCounter/>
    </div>
  );
}

export default App;
