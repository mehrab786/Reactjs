import React from 'react';
import ReactDOM from 'react-dom';
import {Add,Sub,Mul,Div} from './App';

ReactDOM.render(
  <>

  <ul>
  <li>Sum of two no is {Add(40,4)}</li>
  <li>Sub of two no is {Sub(40,4)}</li>
  <li>Mul of two no is {Mul(40,4)}</li>
  <li>Mul of two no is {Div(7,3)}</li>
  </ul>
  </>,
  document.getElementById("root")
);
