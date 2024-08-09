import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotfound';

function App() {
  return <div className="App">
    <h1 style={{marginBottom:200, background:'lightgrey'}}>I am Header and I wont change</h1>
    <Router>
      <ul>
        <li><Link to={""}>Home</Link></li>
        <li><Link to={"About"}>About</Link></li>
        <li><Link to={"Contact"}>Contact</Link></li> 
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound  />} />
      </Routes>
    </Router>
    <h2 style={{marginTop:200, background:'lightgrey'}}>I am Footer and I wont Change</h2>
  </div>
}

export default App;
