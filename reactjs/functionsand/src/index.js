import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Func from './func';
import MyComponent from './class';
import Variables from './inputtypes';
import Userobject, { UsersArray } from './array';
import Child from './child';
import Editarray from './arrrayedit';
import Deletearray from './deletearray';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Variables/>

    <Child/>
   <UsersArray/> */}
   <Editarray/>
   <Deletearray/>
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

