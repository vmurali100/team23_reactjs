import logo from './logo.svg';
import './App.css';
import RegistrationForm from './Components/RP1/RegistrationForm';
import LoginForm from './Components/RP1/LoginForm';
import RegistrationFormHOC from './Components/HOC/RegistrationFormHOC';
import LoginFormHOC from './Components/HOC/LoginFormHOC';
import RegistrationFormWrapper from './Components/Context-API/RegistrationFormWrapper';
import LoginFormWrapper from './Components/Context-API/LoginFormWrapper';


function App() {
  return (
    <div className="App">
      {/* <MyForm/> */}
      {/* <SingleFileForm/> */}
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <RegistrationFormHOC/> */}
      {/* <LoginFormHOC/> */}
      {/* <RegistrationFormWrapper/> */}
      <LoginFormWrapper/>
    </div>
  );
}

export default App;
