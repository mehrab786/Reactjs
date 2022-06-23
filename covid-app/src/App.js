import React from 'react';
function Add(a,b){
  let sum=a+b;
  return sum;
}
function Sub(a,b){
    let sub;
    sub=a-b;
    return (sub);
  }
  function Mul(a,b){
    let mul;
    mul=a*b;
    return mul;
  }
  function Div(a,b){
      let Div=a/b;
      Div=Div.toFixed(2);
      return Div;
  }
  export {Add,Sub,Mul,Div};