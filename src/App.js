import './App.css';
import React,{useState, useEffect} from 'react';
import Btn from "./btn.js";

function App() {
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0); 

  const [res, setRes] = useState(0); 

  const calculate = (p) =>{
    if (p=="+"){
      setRes(parseInt(input)+parseInt(input2));
      console.log(res); 
    }
    else if (p=="-"){
      setRes(parseInt(input)-parseInt(input2));
      console.log(res); 
    }
    else if (p=="*"){
      setRes(parseInt(input)*parseInt(input2));
      console.log(res); 
    }
    else {
      setRes(parseInt(input)/parseInt(input2));
      console.log(res); 
    }
  }
  return (
    <div className="App">
      <h1> Calculator </h1>
      <input onChange={(test) => setInput(test.target.value)}></input>
      <input onChange={(test) => setInput2(test.target.value)}></input>
      <h2>{res}</h2>
      <Btn X={"+"} y={(e)=> calculate(e)}/>
      <Btn X={"-"} y={(e)=> calculate(e)}/>
      <Btn X={"*"} y={(e)=> calculate(e)}/>
      <Btn X={"/"} y={(e)=> calculate(e)}/>
    </div>
  );
}

export default App;
