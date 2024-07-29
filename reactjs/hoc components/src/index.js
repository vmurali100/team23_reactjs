import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Forms from './validationforms';
import Combine from './hoc1/combine';
import Increment from './hoc1/increment';
import Decrement from './hoc1/decrement';
import Base1 from './hoc2/base1';
import Base2 from './hoc2/base2';
import Tabel5 from './hoc2/tabel5';
import Table3 from './hoc2/table3';
import Table4 from './hoc2/table4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Increment/>
  <Decrement/> */}
  <Base1/><hr/>
  <Base2/><hr/>
  <Table3/><hr/>
  <hr/>
  <Table4/>
  <hr/>
  <Tabel5/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
