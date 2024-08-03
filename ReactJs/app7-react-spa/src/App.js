import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
      <h1 style={{marginBottom:200,background:"lightgreen"}}>I am Header I wont Change</h1>
      <Router>
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={"about"}>About</Link>
          </li>
          <li>
            <Link to={"contact"}>Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>

      <h2 style={{marginTop:200,background:"lightgreen"}}>I am Footer... I wont Change</h2>
    </div>
  );
}

export default App;
