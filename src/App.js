import CounterComponent from "./components/CounterComponent"
import { useState } from "react";

function App() {
  
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const handleAdd = () =>{
    setCounter(counter + 1);
  }

  const handleSubstract = () =>{
    setCounter(counter - 1);
  }

  const handleReset = () => {
    setCounter(initialState)
  }
  
  return (
    <>
      <CounterComponent counter = {counter}></CounterComponent>
      <button className="btn btn-primary" onClick = {handleAdd}>+1</button>
      <button className="btn btn-primary" onClick = {handleReset}>RESET</button>
      <button className="btn btn-primary" onClick = {handleSubstract}>-1</button>
    </>
  );
}

export default App;
