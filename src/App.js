import "./App.css"
import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <input type="text" onChange={(e) => setCounter(Number(e.target.value))} />
      <span className="output">{counter}</span>
      <div className="btn">
        <button className="control" onClick={increase}>+</button>
        <button className="control" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
      <p>Made by Rohit Kushwaha</p>
    </div>
    
  );
}