import logo from './logo.svg';
import './App.css';
import Header from './Header';
import React , { useState }from "react";
function App() {
  //const state=useState();
  const [count,setCount]=useState(0);
  function num()
  {
    setCount(count+1);
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={num}>ok</button>
    </>
  );
}

export default App;
